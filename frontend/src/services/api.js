import axios from "axios";

// REEMPLAZA ESTA LÍNEA CON TU IP REAL
const backendHost = "192.168.56.1"; 
const baseURL = `http://${backendHost}:5000/api`;

export const api = axios.create({
  baseURL: baseURL
});

// Funciones para el carrito
export const getCart = () => api.get('/cart');
export const addToCart = (product) => api.post('/cart/add', product);
export const removeFromCart = (productId) => api.delete(`/cart/remove/${productId}`);

