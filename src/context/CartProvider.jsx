import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    let itemRemoved = false;
    const newCart = cart.filter((item) => {
      if (item.id === product.id && !itemRemoved) {
        itemRemoved = true;
        return false;
      }
      return true;
    });
    setCart(newCart);
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeAllFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
