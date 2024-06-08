'use server'

import { addAssistant } from "./mongo/assistant"

export async function addAssistantToEvent(data:any){
  try {
    const response = await addAssistant(data)
    return response
  } catch (error) {
    console.error(error)
    return error
  }
}

export async function login(username:string, password:string) {
 return username === 'eloy' && password === 'vinamexAdmin'
}