import api from './axios';

const API_RECEIPT_URL = '/receipt';

export const getReceipt = async (serviceId: string) => {
  try {
    const response = await api.get(`${API_RECEIPT_URL}/${serviceId}`);
    return response.data.receiptUrl;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Ocurrió un error. Intente de nuevo.');
  }
};
