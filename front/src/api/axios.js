import axios from 'axios';

import tokenService from '../services/token.service';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',

  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = tokenService.getToken();

  if (token) {
    config.headers.Authorization = 
      `Bearer ${token}`;
  }

  return config;
});

export default api;