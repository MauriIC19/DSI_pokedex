const express = require("express");
const app = express();
const db = require("./config/database.js");

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

app.post("/user", async (req, res) => {
  const { name, last_name, mail, phone_number, password } = req.body;

  let query = "INSERT INTO users (name, last_name, mail, phone_number, password)";
  query += ` VALUES ('${name}', '${last_name}', '${mail}', '${phone_number}', '${password}');`;

  const rows = await db.query(query);

  console.log(rows);
  res.json(rows);
});

app.listen(3000, () => {
  console.log("Server is running...");
});
