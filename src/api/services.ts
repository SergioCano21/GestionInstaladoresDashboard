import type { Service } from '@/types/types';
import api from './axios';

const API_SERVICES_URL = '/service';

export const getServices = async (status: 'active' | 'completed') => {
  try {
    console.log('Agregar lean a todos las find de mongo para mas eficiencia');
    console.log(status);
    const response = await api.get(`${API_SERVICES_URL}/${status}`);
    return response.data.services ?? [];
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const addService = async (data: Service) => {
  try {
    const response = await api.post(API_SERVICES_URL, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const updateService = async (data: Service) => {
  try {
    const response = await api.put(`${API_SERVICES_URL}/${data._id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const deleteService = async (id: string) => {
  try {
    const response = await api.delete(`${API_SERVICES_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const restoreService = async (id: string) => {
  try {
    const response = await api.put(`${API_SERVICES_URL}/${id}/restore`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};
