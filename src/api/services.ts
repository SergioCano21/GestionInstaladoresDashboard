import axios from 'axios';

const API_BASE_URL = process.env.BACKEND_URL;

export const getServices = async () => {
  const response = await axios
    .get(`${API_BASE_URL}/services`)
    .then((res) => res.data)
    .catch((err) => {
      console.error('Error fetching services:', err);
    });
  return response;
};
