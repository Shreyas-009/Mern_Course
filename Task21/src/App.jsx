import React, { useState } from "react";
import { Card } from "./components";
import Data from "./assets/Data";

const App = () => {
  const [data, setData] = useState(Data);
  return (
    <div className="w-fill min-h-screen bg-zinc-900 p-5">
      <div className="products w-fill h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
        {data.map((product) => {
          return <Card key={product.id} Data={product} />;
        })}
      </div>
    </div>
  );
};

export default App;
