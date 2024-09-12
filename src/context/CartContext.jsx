import { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = useCallback((pizza) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(item => item.id === pizza.id);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart[index].quantity += 1;
        return newCart;
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  }, []);
  const removeFromCart = useCallback((pizzaId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(item => item.id === pizzaId);
      if (index === -1) return prevCart;

      const newCart = [...prevCart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      } else {
        return newCart.filter(item => item.id !== pizzaId);
      }
      return newCart;
    });
  }, []);
  const getQuantity = useCallback(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);
  const getTotal = useCallback(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal, getQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;




