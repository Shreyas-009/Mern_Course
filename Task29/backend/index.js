const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
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

app.get("/video", (req, res) => {
  const stream = fs.createReadStream("./Lightning Effect.mp4");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

app.get("/text", (req, res) => {
  fs.readFile("./text.txt", (err, data) => {
    res.end(data);
  });
});

app.listen(Port, (req, res) => {
  console.log("server is running on port" + Port);
});
