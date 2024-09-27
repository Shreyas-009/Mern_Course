import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../features/cart/CartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.isOpen);

  return (
    <div className="sticky top-0 flex p-2 bg-zinc-600 z-50 w-full justify-between">
      <div className=" flex gap-7">
        <button
          className={`bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1`}
        >
          <Link to="/">Home</Link>
        </button>
        <button
          className={`bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1`}
        >
          <Link to="/products">Products</Link>
        </button>
        <button
          className={`bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1`}
        >
          <Link to="/checkout">checkout</Link>
        </button>
      </div>
      <button
        className={`bg-purple-500 rounded-md hover:bg-purple-700 px-3 py-1`}
        onClick={() => dispatch(toggleCart())}
      >
        Cart
      </button>
    </div>
  );
};

export default Navbar;