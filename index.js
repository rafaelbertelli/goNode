const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // http://localhost:3000/?name=Rafael
  return res.send(`Helloou, ${req.query.name}`);
});

app.get("/login", (req, res) => {
  // http://localhost:3000/login
  return res.send("Login");
});

app.get("/nome/:name", (req, res) => {
  // http://localhost:3000/nome/Rafael
  return res.json({
    message: `Bem vindo, ${req.params.name}`
  });
});

app.listen(3000);
