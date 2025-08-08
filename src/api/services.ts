import type { Service } from '@/types/types';
import api from './axios';

const API_SERVICES_URL = `${import.meta.env.VITE_API_URL}/service`;

export const getServices = async () => {
  try {
    const response = await api.get(API_SERVICES_URL, { withCredentials: true });
    return response.data.services;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const addServices = async (data: Service) => {
  try {
    const response = await api.post(API_SERVICES_URL, data, { withCredentials: true });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};
