import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartProducts, setCartProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        cartProducts,
        setCartProduct,
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
