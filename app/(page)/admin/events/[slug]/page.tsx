'use client'
import {useEffect, useState} from 'react'
import { eventService } from "@/services/eventServices";

export default function Event({params}: {params:{slug: string}}) {
  const [event, setEvent] = useState({attendants:[], name:''})
  const getEvent = async() => {
    try {
      const result = await eventService.getOne(params.slug);
      setEvent(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   getEvent()
  },[])

  return (
    <div className='min-h-screen flex flex-col w-full items-center py-8 dark:bg-vina-blue-medium dark:text-white'>
      <h1 className='text-3xl'>Personas registradas</h1>
      <span>{event.name}</span>
      <ul className='w-full max-w-7xl mt-4 px-4'>
        <li  className='grid grid-cols-12 auto-cols-auto'>
          <span className="text-center border border-black dark:border-white pl-1 py-1 col-span-2">Nombre</span>
          <span className="text-center border border-black dark:border-white pl-1 py-1 col-span-2">Iglesia</span>
          <span className="text-center border border-black dark:border-white pl-1 py-1 col-span-2">Ciudad</span>
          <span className="text-center border border-black dark:border-white pl-1 py-1 col-span-2">Telefono</span>
          <span className="text-center border border-black dark:border-white pl-1 py-1 col-span-2">Email</span>
          <span className="text-center border border-black dark:border-white pl-1 py-1">Grupo</span>
          <span className="text-center border border-black dark:border-white pl-1 py-1">Req. Hospedaje</span>
        </li>
        {event.attendants.map((att:any) => (
          <li key={att._id}  className='grid grid-cols-12 even:bg-indigo-200 dark:even:bg-indigo-800 auto-cols-min'>
          <span className='text-center border border-black dark:border-white col-span-2'>{att.name} {att.lastName}</span>
          <span className='text-center border border-black dark:border-white col-span-2'>{att.church}</span>
          <span className='text-center border border-black dark:border-white col-span-2'>{att.city} / {att.state}</span>
          <span className='text-center border border-black dark:border-white col-span-2'>{att.phone}</span>
          <span className='text-center border border-black dark:border-white col-span-2'>{att.mail}</span>
          <span className='text-center border border-black dark:border-white'>{att.accompanying + 1} {att.accompanying > 0 ? 'Personas': 'Persona'}</span>
          <span className='text-center border border-black dark:border-white'>{att.hosting ? 'Sí': 'NO'}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}