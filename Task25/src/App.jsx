import React, { useState } from "react";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

const App = () => {
  const [cart, setCart] = useState();
  return (
    <div className="flex flex-col w-full h-screen bg-zinc-900 text-white overflow-hidden">
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/products"
          element={<Products cart={cart} setCart={setCart} />}
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
