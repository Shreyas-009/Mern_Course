import React from "react";

const Card = ({ Data }) => {
  console.log(Data);
  
  return (
    <div
      style={{
        borderImage: "linear-gradient(to right, red,orange,purple,blue) 1",
      }}
      className="flex flex-col gap-3 p-3 rounded-xl bg-zinc-800 bg-gradient-to-r from-zinc-700 to-zinc-800 border-4"
    >
      <img
        src={Data.image}
        alt={Data.name}
        className="w-full h-32 object-cover"
      />
      <h1 className="text-xl font-bold text-white">{Data.name}</h1>
      <p className="text-sm text-white">{Data.description}</p>
      <h2 className="text-2xl font-bold text-white">{Data.price}</h2>
    </div>
  );
};

export default Card;
