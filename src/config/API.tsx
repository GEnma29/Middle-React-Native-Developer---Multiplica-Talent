import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://6222994f666291106a29f999.mockapi.io/api/v1',
  timeout: 3000,
});
