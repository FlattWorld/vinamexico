'use client'
import { eventService } from "@/services/eventServices"
import Link from "next/link";
import { useEffect, useState, useRef } from "react"
import { Button, Input } from "@/components";
import { addEventAction, getEventsAction } from "@/lib/actions/eventActions";
import {PencilSquareIcon} from '@heroicons/react/24/outline'
import type { PutBlobResult } from '@vercel/blob';

type Event = {
  _id: string;
  title: string;
  place: string;
  date: string;
  description: string;
}

export default function Events () {
  const [events, setEvents] = useState<Event[] | []>([])
  const [createEventFormData, setCreateEventFormData] = useState({
    title: '',
    description: '',
    place: '',
    date: '',
    pdfUrl: ''
  })

  const onChangeCreateEventForm = ({name, value}: {name:string, value: string | number}) => {
    setCreateEventFormData({...createEventFormData, [name]: value})
  }

  const getEvents = async() => {
    try {
      const result:any = await getEventsAction();
      console.log(result)
      setEvents(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   getEvents()
  },[])

  const submit = async (e:any) => {
    e.preventDefault()
    if(!createEventFormData.title || !createEventFormData.description || !createEventFormData.place || !createEventFormData.date || !createEventFormData.pdfUrl) return alert('Faltan campos por llenar o no se ha cargado PDF')
    try {
      const result:any = await addEventAction(createEventFormData)
      console.log(result)
      if(result.acknowledged) {
        getEvents()
        setCreateEventFormData({
          title: '',
          description: '',
          place: '',
          date: '',
          pdfUrl: ''
        })
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="dark:bg-vina-blue-dark py-8 flex flex-col items-center min-h-screen gap-8">
      <h1 className="text-3xl text-center dark:text-vina-orange-medium">Eventos</h1>
      <h2 className="text-xl text-center dark:text-vina-orange-medium">Crear Evento</h2>
      <DocumentUpload onChange={onChangeCreateEventForm} />
      <form action="" onSubmit={(e) => submit(e)} className="flex flex-wrap gap-2 gap-y-6 w-full justify-center md:px-16">
        <Input className="w-5/12" label="Titulo del Evento" name="title" type="text" value={createEventFormData.title} onChange={onChangeCreateEventForm} />
        <Input className="w-5/12" label="Descripcion" max={130} name="description" type="text" value={createEventFormData.description} onChange={onChangeCreateEventForm} />
        <Input className="w-5/12" label="Fecha" name="date" type="text" value={createEventFormData.date} onChange={onChangeCreateEventForm} />
        <Input className="w-5/12" label="Lugar" name="place" type="text" value={createEventFormData.place} onChange={onChangeCreateEventForm} />
        <Button onClick={submit} className="w-1/3">Crear Evento</Button>
      </form>
      
      <h2 className="text-3xl text-center dark:text-vina-orange-medium">Eventos Existentes</h2>
      {/* {JSON.stringify(events)} */}
      <ul className="px-8 w-full flex flex-wrap mt-16">
        {events.map((event) => (
          <li key={event['_id']} className="text-black dark:text-white border-2 rounded-md border-vina-blue-dark dark:border-vina-orange-dark max-w-lg">
            <Link href={`/admin/events/${event._id}`} className="flex flex-col hover:bg-indigo-500 hover:bg-opacity-20 p-4 gap-4"> 
              <span className="text-xl text-center w-full">{event.title}</span>
              <span>{event.description}</span>
              <span>{event.date}</span>
              <span>{event.place}</span>
            </Link>
            <PencilSquareIcon className="h-6 w-6 text-vina-blue-dark dark:text-vina-orange-dark"/>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

 function DocumentUpload({onChange}: {onChange: any}){
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  useEffect(() => {
    if(blob && blob.url){
      console.log('url file: ',blob.url)
      onChange({name: 'pdfUrl', value: blob.url})
    }
  },[blob])
  return (
    <>
      <h1 className="text-vina-blue-dark dark:text-white">Cargar PDF (Tamaño máximo 4MB)</h1>

      <form className="text-vina-blue-dark dark:text-white"
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];
          console.log(file)
          const response = await fetch(
            `/api/pdf/upload?filename=${file.name}`,
            {
              method: 'POST',
              body: file,
            },
          );

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
        }}
      >
        <input className="mx-8 inline-block" name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Cargar</button>
      </form>
      {blob && (
        <div className="text-white">
          Archivo Cargado con Éxito 
        </div>
      )}
    </>
  );
}