import React from "react";
import { useFetch } from "./useFetch";

const ShowData = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  if (error) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <h1 className="text-5xl text-white">{error}</h1>
      </div>
    );
  }

  return !loading ? (
    <div className=" p-10 bg-zinc-800 rounded-xl grid grid-cols-4 gap-5">
      {data.slice(0, 20).map((photo) => (
        <div key={photo.id} className="bg-zinc-600 text-white rounded-xl p-2">
          <img
            className="w-full rounded-xl"
            src={photo.thumbnailUrl}
            alt={photo.title}
          />
          <p className="line-clamp-1">{photo.title}</p>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex justify-center items-center w-screen h-screen">
      <h1 className="text-5xl text-white">Loading...</h1>
    </div>
  );
};

export default ShowData;
