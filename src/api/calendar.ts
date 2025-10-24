import type { Schedule } from '@/types/types';
import api from './axios';

const API_CALENDAR_URL = '/schedule';

export const getCalendar = async () => {
  try {
    const response = await api.get(API_CALENDAR_URL);
    return response.data.schedules;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const addCalendar = async (data: Schedule) => {
  try {
    const { date, startTime, endTime, ...rest } = data;
    const response = await api.post(API_CALENDAR_URL, {
      ...rest,
      startTime: new Date(`${date}T${startTime}`),
      endTime: new Date(`${date}T${endTime}`),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const updateCalendar = async (data: Schedule) => {
  try {
    const response = await api.put(`${API_CALENDAR_URL}/${data._id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};

export const deleteCalendar = async (id: string) => {
  try {
    const response = await api.delete(`${API_CALENDAR_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};
