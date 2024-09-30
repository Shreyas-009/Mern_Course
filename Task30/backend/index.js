const express = require("express");
const app = express();
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
  res.send("Server is running");
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  res.status(200).json({
    message: "Form submitted successfully",
    data: { name, email, message },
  });
});

app.listen(Port, (req, res) => {
  console.log(`App is running on port : ${Port}`);
});
