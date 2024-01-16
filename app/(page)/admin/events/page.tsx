'use client'
import { eventService } from "@/services/eventServices"
import Link from "next/link";
import { useEffect, useState } from "react"

type Event = {
  _id: string;
  name: string;
  city: string;
  endDate: string;
  startDate: string;
  state: string;
}

export default function Events ({params}:any) {
  const [events, setEvents] = useState<Event[] | []>([])
  const getEvents = async() => {
    try {
      const result = await eventService.getAll();
      setEvents(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
   getEvents()
  },[])

  return (
    <div className="dark:bg-vina-blue-medium py-8 flex flex-col items-center min-h-screen">
      <h1 className="text-3xl text-center dark:text-vina-orange-medium">Eventos</h1>
      {/* {JSON.stringify(events)} */}
      <ul className="px-8 w-full max-w-xl flex flex-col mt-16">
        {events.map((event) => (
          <li key={event['_id']} className="text-black dark:text-white border-2 rounded-md border-vina-blue-dark dark:border-vina-orange-dark">
            <Link href={`/admin/events/${event._id}`} className="flex flex-col hover:bg-indigo-500 hover:bg-opacity-20 p-4"> 
              <span className="text-xl">{event.name}</span>
              <span>{event.city} / {event.state}</span>
              <span>{event.startDate} - {event.endDate}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
