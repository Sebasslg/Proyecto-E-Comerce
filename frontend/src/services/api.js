import axios from "axios";


export const api = axios.create({
  baseURL: '/api'
});

// Funciones para el carrito
export const getCart = () => api.get('/cart');
export const addToCart = (product) => api.post('/cart/add', product);
export const removeFromCart = (productId) => api.delete(`/cart/remove/${productId}`);
export const updateCart = (productId, quantity) => api.post('/cart/update', { productId, quantity });

