import axios from 'axios';

export default function useAxios() {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
  });

  return instance;
}
