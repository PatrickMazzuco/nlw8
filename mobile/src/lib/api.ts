import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.143:3333/api/v1',
});
