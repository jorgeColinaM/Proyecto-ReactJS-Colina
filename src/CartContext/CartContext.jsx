

import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addProduct: (item, quantity) => {},
  removeProduct: (itemId) => {},
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      console.log("Se añadieron " + quantity + " de " + item.toString() + "correctamente");
      console.log(cart);
    } else {
      console.error("El producto ya esta en el carrito");
    }
  };

  const removeProduct = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calculate the total quantity and total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};