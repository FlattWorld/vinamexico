import { AxiosInstance } from 'axios';
import { vinaApi } from './axios';

export class EventService {
  protected readonly instance: AxiosInstance;
  public constructor() {
    this.instance = vinaApi;
  }

  public async getAll() {
    try {
      const response = await this.instance.get('/events');
      return response.data;
    } catch (error) {
      throw { error, message: 'Error getting all events' };
    }
  }
  public async getOne(id:string) {
    try {
      const response = await this.instance.get(`/events/${id}`)
      return response.data
    }catch (error){
      throw {error, message: 'Error geting event'}
    }
  }
  public async addAttendant(id: string, data: {}) {
    const jsonData = JSON.stringify(data)
    try {
      const response = await this.instance.patch(`/events/${id}/addAttendant`, jsonData)
      return response
    }catch (error){
      throw {error, message: 'Error updating event'}
    }

  }
}

export const eventService = new EventService();
