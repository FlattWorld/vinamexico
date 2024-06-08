'use server'
import { addEvent, getEvents, getEvent } from "../mongo/events"

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

export async function getEventAction(id:string) {
  try {
    const response = await getEvent(id)
    return response
  } catch (error) {
    console.error(error)
    return error
  }
}