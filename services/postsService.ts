import { AxiosInstance } from 'axios';
import { vinaApi } from './axios';

export class PostsService {
  protected readonly instance: AxiosInstance;
  public constructor() {
    this.instance = vinaApi;
  }

  public async getAll() {
    try {
      const response = await this.instance.get('/posts');
      return response.data;
    } catch (error) {
      throw { error, message: 'Error getting all churches' };
    }
  }
  public async makePost({ title, body}:{title:string; body:string}) {
    console.log({ title, body })
    try {
      const response = await this.instance.post('/posts', { title, body });
      return response.data;
    } catch (error) {
      throw { error, message: 'Error creating post' };
    }
  }
}
export const postsService = new PostsService();
