const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // http://localhost:3000
  return res.send(`Helloou, bem vindo!`);
});

app.listen(3000);
