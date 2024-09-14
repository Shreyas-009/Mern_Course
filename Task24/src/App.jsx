import React from "react";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-zinc-900 text-white overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
