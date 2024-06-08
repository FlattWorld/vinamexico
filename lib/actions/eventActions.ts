'use server'
import { addEvent, getEvents } from "../mongo/events"

export async function addEventAction(data:any){
  try {
    const response = await addEvent(data)
    return response
  } catch (error) {
    console.error(error)
    return error
  }
}

export async function getEventsAction(){
  try {
    const response = await getEvents()
    return response
  } catch (error) {
    console.error(error)
    return error
  }
}