import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401 && window.location.pathname !== '/')
      window.location.href = '/';
    return Promise.reject(error);
  },
);

export default api;
