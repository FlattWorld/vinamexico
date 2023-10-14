import axios from 'axios';

export const vinaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 20000,
  timeoutErrorMessage: 'Time out!',
  withCredentials: true,
});
