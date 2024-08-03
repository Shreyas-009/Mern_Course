import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex p-3 px-7 sticky top-0 rounded-xl justify-between items-center gap-5 text-white bg-zinc-800 z-50">
      <Link className="hover:text-purple-700  text-2xl font-bold" to={"/dashboard"}>
        <i className="ri-home-2-line"></i>{" "}
      </Link>
      <Link className="text-2xl hover:text-purple-700  font-bold" to={"/"}>
        Home
      </Link>
      <div className="flex gap-5">
        <Link
          className="px-4 py-2 bg-purple-500 rounded-xl hover:bg-purple-600"
          to={"/signup"}
        >
          SignUp
        </Link>
        <Link
          className="px-4 py-2 bg-purple-500 rounded-xl hover:bg-purple-600"
          to={"/login"}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
