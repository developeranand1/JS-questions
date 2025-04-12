import api from './apiService';

export const fetchAllBanner = async () => {
  try {
    const response = await api.post('/home/homeWebApi', {});
    return response.data;
  } catch (error) {
    console.error("API Error in fetchAllBanner:", error);
    return null;
  }
};

