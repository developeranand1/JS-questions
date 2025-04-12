import api from './apiService';

export const fetchAllTestimonial = async () => {
  try {
    const response = await api.post('/home/testimonial', {});
    return response?.data?.testimonial;
  } catch (error) {
    console.error("API Error in fetchAllTestimonial:", error);
    return null;
  }
};

