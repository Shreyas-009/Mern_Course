const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/home" || req.url === "/") {
    fs.readFile(path.join(__dirname, "home.html"), "utf-8", (err, data) => {
      if (err) {
        res.end("500: Internal Server Error");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), "utf-8", (err, data) => {
      if (err) {
        res.end("500: Internal Server Error");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    fs.readFile(path.join(__dirname, "contact.html"), "utf-8", (err, data) => {
      if (err) {
        res.end("500: Internal Server Error");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    fs.readFile(path.join(__dirname, "404.html"), "utf-8", (err, data) => {
      if (err) {
        res.end("500: Internal Server Error");
      } else {
        res.writeHead(404);
        res.end(data);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
