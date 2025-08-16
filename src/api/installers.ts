import type { Installer } from '@/types/types';
import api from './axios';

const API_INSTALLERS_URL = '/installer';

export const getInstallers = async () => {
  try {
    const response = await api.get(API_INSTALLERS_URL);
    return response.data.installers;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const addNewInstaller = async (data: Installer) => {
  try {
    const response = await api.post(API_INSTALLERS_URL, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const addExistingInstaller = async (installerId: string) => {
  try {
    const response = await api.post(`${API_INSTALLERS_URL}/addExisting`, { installerId });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const updateInstaller = async (data: Installer) => {
  try {
    const response = await api.put(`${API_INSTALLERS_URL}/${data._id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const deleteInstaller = async (id: string) => {
  try {
    const response = await api.delete(`${API_INSTALLERS_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};
