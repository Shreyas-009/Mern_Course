import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let message = e.target[2].value;

    const res = axios
      .post("https://cors-form-backend.vercel.app/submit", {
        name,
        email,
        message,
      })
      .then((res) => {
        setData(res.data.data);
        setMessage(res.data.message);
        alert(res.data.message);
        e.target.reset();
      });

  };

  return (
    <div className="bg-zinc-900 px-10 flex flex-col md:flex-row justify-center items-center w-full h-screen gap-7">
      <form
        onSubmit={handleSubmit}
        className=" bg-zinc-800 w-full md:w-fit md;h-1/2 rounded-xl py-10 px-5 md:p-5 flex flex-col gap-7"
      >
        <input
          className="px-6 py-3 text-xl rounded-xl outline-none border-none "
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          className="px-6 py-3 text-xl rounded-xl outline-none border-none "
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          className="px-6 py-3 text-xl rounded-xl outline-none border-none "
          type="text"
          name="message"
          placeholder="message"
        />
        <input
          className="bg-purple-500 hover:bg-purple-600 px-6 py-3 text-xl text-white rounded-full"
          type="submit"
          name=""
          id=""
        />
      </form>

      {data && (
        <div className="w-full md:w-1/2  bg-zinc-800 p-5 rounded-xl">
            <div className="flex flex-col h-full gap-5 text-base md:text-2xl text-white">
              <h1>
                <span className="font-bold text-purple-300">Name : </span>{" "}
                {data.name}
              </h1>
              <h1>
                <span className="font-bold text-purple-300">Email : </span>{" "}
                {data.email}
              </h1>
              <h1>
                <span className="font-bold text-purple-300">Message : </span>{" "}
                {data.message}
              </h1>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;
