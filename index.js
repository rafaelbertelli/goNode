const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
  // http://localhost:3000
  return res.render("list", { name: "Borgera" });
});

app.listen(3000);
