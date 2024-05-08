const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Hola mundo!");
});

app.get("/pokemon", (req, res, next) => {
  res.json({ nombre: "Mauricio", edad: "26" });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
