const db = require("./config/database.js");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/pokemon", async (req, res, next) => {
  const pokemon = await db.query("SELECT * FROM pokemon;");
  console.log(pokemon);
  res.json(pokemon);
});

app.post("/pokemon", (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Server is running...");
});
