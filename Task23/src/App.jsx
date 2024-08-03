import React from "react";
import Routers from "./routes/Routers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-fill bg-zinc-900 p-3 text-white">
      <NavBar />
      <Routers />
    </div>
  );
};

export default App;
