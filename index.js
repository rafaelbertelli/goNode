const express = require("express");

const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  req.appName = "GoNode";

  return next();
};

app.use(logMiddleware);

app.get("/", logMiddleware, (req, res) => {
  // http://localhost:3000/?name=Rafael
  return res.send(`Helloou, bem vindo ao ${req.appName}, ${req.query.name}`);
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
