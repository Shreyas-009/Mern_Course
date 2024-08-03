import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full p-5 grid grid-cols-3 text-center bg-zinc-800 rounded-xl">
      <div className="text-xl font-semibold flex flex-col gap-2 ">
        <Link  className='hover:text-purple-300' to={"/signup"}>Sign Up</Link>
        <Link  className='hover:text-purple-300' to={"/login"}>Login</Link>
        <Link  className='hover:text-purple-300' to={"/dashboard"}>Dashboard</Link>
      </div>
      <div className="flex justify-center items-center">
        <Link  className='hover:text-purple-300' to={"/dashboard"}>
          <h1 className="text-5xl">Logo</h1>
        </Link>
      </div>
      <div className="text-xl font-semibold flex flex-col gap-2">
        <Link  className='hover:text-purple-300' to={"/signup"}>Sign Up</Link>
        <Link  className='hover:text-purple-300' to={"/login"}>Login</Link>
        <Link  className='hover:text-purple-300' to={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
}

export default Footer