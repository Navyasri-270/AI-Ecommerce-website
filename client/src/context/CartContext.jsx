import React, { createContext, useState, useEffect, useContext } from 'react';
import API from '../services/api';
import { useAuth } from './AuthContext';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(false);

  // Fetch cart whenever user log state changes
  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCart({ items: [] });
    }
  }, [user]);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await API.get('/cart');
      if (res.data.success) {
        setCart(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching cart', err);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (!user) return { success: false, error: 'Please log in to add items to cart' };
    setLoading(true);
    try {
      const res = await API.post('/cart/add', { productId, quantity });
      if (res.data.success) {
        setCart(res.data.data);
        return { success: true };
      }
    } catch (err) {
      console.error('Error adding to cart', err);
      return { success: false, error: err.response?.data?.message || 'Error adding to cart' };
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId, decrement = false) => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await API.delete(`/cart/remove?productId=${productId}&decrement=${decrement}`);
      if (res.data.success) {
        setCart(res.data.data);
        return { success: true };
      }
    } catch (err) {
      console.error('Error removing from cart', err);
      return { success: false, error: err.response?.data?.message || 'Error updating cart' };
    } finally {
      setLoading(false);
    }
  };

  const clearCart = () => {
    setCart({ items: [] });
  };

  const cartCount = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;
  const cartTotal = cart?.items?.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0) || 0;

  return (
    <CartContext.Provider value={{ cart, loading, addToCart, removeFromCart, fetchCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
