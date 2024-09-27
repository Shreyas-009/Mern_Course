const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const path = require('path');
const Port = 8080;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working");
});

// app.get("/video", (req, res) => {
//   const stream = fs.createReadStream("./Lightning Effect.mp4");
//   stream.on("data", (chunk) => res.write(chunk));
//   stream.on("end", () => res.end());
// });

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/video", (req, res) => {
  const videoPath = path.join(__dirname, "public", "Lightning_Effect.mp4");
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize) {
      res.status(416).send("Requested range not satisfiable");
      return;
    }

    const chunkSize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
});

app.get("/text", (req, res) => {
  fs.readFile("./text.txt", (err, data) => {
    res.end(data);
  });
});

app.listen(Port, (req, res) => {
  console.log("server is running on port" + Port);
});
