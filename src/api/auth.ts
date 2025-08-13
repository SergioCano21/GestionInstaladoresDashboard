import type { LoginForm } from '@/types/types';
import api from './axios';

const API_ADMIN_URL = '/admin';

export const login = async (credentials: LoginForm) => {
  try {
    const response = await api.post(`${API_ADMIN_URL}/login`, credentials);
    return response.data.admin;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Error al intentar iniciar sesión');
  }
};

export const logout = async () => {
  try {
    await api.post(`${API_ADMIN_URL}/logout`, {});
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Error al intentar cerrar sesión');
  }
};

// Validates the authentication of the admin user
export const useAuth = async () => {
  try {
    const response = await api.get(`${API_ADMIN_URL}/auth`);
    return response.data.admin;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Error al verificar la autenticación');
  }
};
