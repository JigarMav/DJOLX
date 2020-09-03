const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("in the middleware ");
  next();
});

const server = http.createServer(app);
server.listen(3000);
