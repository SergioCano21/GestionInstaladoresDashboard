import type { LoginData } from '@/types/types';
import api from './axios';

const API_ADMIN_URL = `${import.meta.env.VITE_API_URL}/admin`;

export const login = async (credentials: LoginData) => {
  try {
    const response = await api.post(`${API_ADMIN_URL}/login`, credentials, {
      withCredentials: true,
    });

    return response.data.admin;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Error al intentar iniciar sesión');
  }
};

export const logout = async () => {
  try {
    await api.post(
      `${API_ADMIN_URL}/logout`,
      {},
      {
        withCredentials: true,
      },
    );
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Error al intentar cerrar sesión');
  }
};

// Validates the authentication of the admin user
export const useAuth = async () => {
  try {
    const response = await api.get(`${API_ADMIN_URL}/auth`, {
      withCredentials: true,
    });

    return response.data.admin;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Error al verificar la autenticación');
  }
};
