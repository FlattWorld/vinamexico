import { AxiosInstance } from 'axios';
import { vinaApi } from './axios';

export class ChurchService {
  protected readonly instance: AxiosInstance;
  public constructor() {
    this.instance = vinaApi;
  }

  public async getAll() {
    try {
      const response = await this.instance.get('/churches');
      return response.data;
    } catch (error) {
      throw { error, message: 'Error getting all churches' };
    }
  }
}
export const churchService = new ChurchService();
