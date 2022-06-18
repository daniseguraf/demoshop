import axios from 'axios';

export const getProductsApi = async () => {
  return await axios.get('/api/products');
};

export const getProductDetailApi = async (id) => {
  return await axios.get(`/api/products/${id}`);
};

export const addToCartApi = async (id) => {
  return await axios.get(`/api/products/${id}`);
};
