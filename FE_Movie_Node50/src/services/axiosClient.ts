// src/services/axiosClient.ts
import { ACCESS_TOKEN, DOMAIN } from '@/constant/app.constant';
import axios from 'axios';

// Tự động thêm token vào headers nếu có
const axiosClient = axios.create({
  baseURL: DOMAIN,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    let token: string | null = null;

    if (typeof window !== 'undefined') {
      token = localStorage.getItem('AccessToken');
    }
    if (!token && ACCESS_TOKEN) {
      token = ACCESS_TOKEN;
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);



export default axiosClient;