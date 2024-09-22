import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/text")
      .then((response) => {
        setText(response.data);
      })
      .catch((error) => console.error("Error fetching text:", error));
  }, []);
  return (
    <div className="w-full min-h-screen bg-zinc-800 flex  p-7">
      <div className="p-3 flex flex-col gap-4 w-1/2">
        <button
          onClick={() => setFile("video")}
          className={"w-full p-3 text-xl font-bold bg-purple-500 hover:bg-purple-600 rounded-md text-white"}
        >
          Lightning_effect_with_HTML&CSS
        </button>
        <button
          onClick={() => setFile("text")}
          className="w-full p-3 text-xl font-bold bg-purple-500 hover:bg-purple-600 rounded-md text-white"
        >
          Problem_Statement.txt
        </button>
        <p>
          <source src="http://localhost:8080/text" />
        </p>
      </div>
      <div className="w-1/2 flex justify-center bg-zinc-900 rounded-xl p-1">
        {file === "video" ? (
          <video controls className="w-full h-auto">
            <source src="http://localhost:8080/video" type="video/mp4" />
          </video>
        ) : (
          <div>
            {/* <pre>{text}</pre> */}
            <p className="text-white text-wrap">
                {text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
