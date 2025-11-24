import axios from "axios";

/*
  Archivo: frontend/src/services/api.js
  Propósito: Crear una instancia de Axios para la API y exponer helpers.

  Notas:
  - `baseURL: '/api'` funciona con la configuración de proxy de Vite
    (`vite.config.js`) en desarrollo. En producción ajusta la URL
    al dominio real (ej. https://api.midominio.com).
  - Añade aquí cabeceras por defecto (Authorization) si usas JWT.
*/

export const api = axios.create({
  baseURL: '/api',
  // timeout: 5000, // ejemplo: tiempo de espera por defecto
});

// Helpers del carrito (puedes ampliar con productos, auth, etc.)
export const getCart = () => api.get('/cart');
export const addToCart = (product) => api.post('/cart/add', product);
export const removeFromCart = (productId) => api.delete(`/cart/remove/${productId}`);
export const updateCart = (productId, quantity) => api.post('/cart/update', { productId, quantity });

