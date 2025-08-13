import type { Administrator } from '@/types/types';
import api from './axios';

const API_ADMINS_URL = '/admin';

export const getAdmins = async () => {
  try {
    console.log('admins');
    const response = await api.get(API_ADMINS_URL);
    return response.data.admins;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const addAdmin = async (data: Administrator) => {
  try {
    const response = await api.post(API_ADMINS_URL, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const updateAdmin = async (data: Administrator) => {
  try {
    const response = await api.put(`${API_ADMINS_URL}/${data._id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const deleteAdmin = async (id: string) => {
  try {
    const response = await api.delete(`${API_ADMINS_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const restoreAdmin = async (id: string) => {
  try {
    const response = await api.put(`${API_ADMINS_URL}/${id}/restore`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};
