import type { Store } from '@/types/types';
import api from './axios';

const API_STORES_URL = `${import.meta.env.VITE_API_URL}/store`;

export const getStores = async () => {
  try {
    const response = await api.get(API_STORES_URL, { withCredentials: true });
    return response.data.stores;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const addStore = async (data: Store) => {
  try {
    const response = await api.post(API_STORES_URL, data, { withCredentials: true });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const updateStore = async (data: Store) => {
  try {
    const response = await api.put(`${API_STORES_URL}/${data._id}`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const deleteStore = async (id: string) => {
  try {
    const response = await api.delete(`${API_STORES_URL}/${id}`, { withCredentials: true });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const restoreStore = async (id: string) => {
  try {
    const response = await api.put(`${API_STORES_URL}/${id}/restore`, { withCredentials: true });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};
