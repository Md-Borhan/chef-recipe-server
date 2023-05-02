const express = require("express");
const cors = require("cors");
const sliderData = require("./data/sliderData.json");
const recipeData = require("./data/recipeData.json");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment 10 server");
});

app.get("/slider", (req, res) => {
  res.send(sliderData);
});

app.get("/recipes", (req, res) => {
  res.send(recipeData);
});

app.listen(port, () => {
  console.log(`Assignment 10 server is running PORT ${port}`);
});
