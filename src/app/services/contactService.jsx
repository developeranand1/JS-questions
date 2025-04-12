import api from './apiService';

export const submitContactRequest = async (formData) => {
  const payload = {
    ...formData,
    pageName: 'Our News',
    type: 'Enquiry',
  };

  const response = await api.post('/home/saveContactUsReq', payload);
  return response.data;
};
