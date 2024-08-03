import React from "react";
import Data from "../assets/Data";
import { Card } from "../components";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen relative rounded-xl overflow-hidden my-5">
        <img
          className="h-full w-full rounded-xl]"
          src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="overlay rounded-xl w-full h-full absolute top-0 z-10 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7),rgba(0,0,0,0.8),rgba(0,0,0,0.9))]">
          <div className="w-full h-full flex flex-col gap-24 items-center justify-center text-white">
            <h1 className="uppercase text-5xl font-black to-zinc-200">
              Welcome to ower website{" "}
            </h1>
            <p className="text-center w-3/5 text-2xl text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in
              incidunt corporis aperiam dicta commodi vitae nisi distinctio
              libero labore voluptas accusantium hic praesentium, et veritatis
              consequatur porro, dolorum eius esse? Obcaecati est deleniti
              facere, dignissimos voluptates minus, maxime tempore molestias
              aliquam inventore cum saepe reiciendis vel fuga, quas modi.
            </p>
            <button className="px-7 py-3 border font-black">Welcome</button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 px-10 py-5 grid grid-cols-2 gap-12 rounded-xl">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="text-start h-full flex flex-col justify-center gap-14">
          <h1 className="uppercase text-5xl to-zinc-200">
            Welcome to ower website{" "}
          </h1>
          <p className="w-3/5 text-2xl text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in
            incidunt corporis aperiam dicta commodi vitae nisi distinctio libero
            labore voluptas accusantium{" "}
          </p>
          <button className="w-2/5 py-3 border font-black">Welcome</button>
        </div>
      </div>

      <div className="services bg-zinc-800 h-fit my-5 rounded-xl py-2">
        <h1 className="uppercase text-5xl font-bold text-center mb-4">
          Our Services
        </h1>
        <div className="grid gap-7 p-7 grid-cols-4">
          <div className="flex flex-col gap-3 p-3 rounded-x bg-zinc-700 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[30vh] rounded-xl object-fit"
            />
            <h1 className="text-xl font-bold text-white">Service 1</h1>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-3 rounded-xl bg-zinc-700">
            <img
              src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[30vh] rounded-xl object-fit"
            />
            <h1 className="text-xl font-bold text-white">Service 2</h1>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-3 rounded-xl bg-zinc-700 ">
            <img
              src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[30vh] object-fit rounded-xl"
            />
            <h1 className="text-xl font-bold text-white">Service 3</h1>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-3 rounded-x bg-zinc-700 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[30vh] rounded-xl object-fit"
            />
            <h1 className="text-xl font-bold text-white">Service 4</h1>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Dashboard;
