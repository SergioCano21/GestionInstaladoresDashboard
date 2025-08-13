import type { Store } from '@/types/types';
import api from './axios';

const API_STORES_URL = '/store';

export const getStores = async () => {
  try {
    console.log('Stores');
    const response = await api.get(API_STORES_URL);
    return response.data.stores;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const addStore = async (data: Store) => {
  try {
    const response = await api.post(API_STORES_URL, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const updateStore = async (data: Store) => {
  try {
    const response = await api.put(`${API_STORES_URL}/${data._id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const deleteStore = async (id: string) => {
  try {
    const response = await api.delete(`${API_STORES_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const restoreStore = async (id: string) => {
  try {
    const response = await api.put(`${API_STORES_URL}/${id}/restore`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};
