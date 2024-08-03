import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handlesubmit = (e) => {    
    console.log("submitted");
    navigate("/login");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handlesubmit}
        className="w-1/4 bg-zinc-800 p-5 rounded-xl text-white"
      >
        <input
          className="mt-5 w-full p-2 rounded"
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="mt-5 w-full p-2 rounded"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="mt-5 w-full p-2 rounded"
          type="password"
          placeholder="Password"
          required
        />
        <button className="mt-5 w-full bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 rounded">
          Sign Up
        </button>
        <p className="mt-5 text-center">
          have an account?{" "}
          <Link className="text-purple-500" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
