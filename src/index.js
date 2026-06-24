const express = require("express");
require("dotenv").config();
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(`Hello World! ${process.env.ENV}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
