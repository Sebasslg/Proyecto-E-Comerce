import React, { createContext, useContext, useEffect, useState } from 'react';
import * as api from '../services/api';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Cargar carrito desde el backend
  const loadCart = async () => {
    try {
      setLoading(true);
      const res = await api.getCart();
      setCartItems(res.data || []);
    } catch (err) {
      console.error('Error loading cart', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  // ➕ Agregar producto
  const addToCart = async (product) => {
    try {
      const res = await api.addToCart(product);
      setCartItems(res.data || []);
    } catch (err) {
      console.error('Error adding to cart', err);
    }
  };

  // ➖ Eliminar producto
  const removeFromCart = async (productId) => {
    try {
      const res = await api.removeFromCart(productId);
      setCartItems(res.data || []);
    } catch (err) {
      console.error('Error removing from cart', err);
    }
  };

  // 🔄 Actualizar cantidad
  const updateQuantity = async (productId, quantity) => {
    try {
      const res = await api.post('/cart/update', { productId, quantity });
      setCartItems(res.data || []);
    } catch (err) {
      console.error('Error updating quantity', err);
    }
  };

  // 🔢 Cantidad total de items
  const getItemCount = () =>
    cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
      const updateQuantity = async (productId, quantity) => {
        try {
          const res = await api.updateCart(productId, quantity);
          setCartItems(res.data || []);
        } catch (err) {
          console.error('Error updating quantity', err);
        }
      };
