const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment 10 server");
});

app.listen(port, () => {
  console.log(`Assignment 10 server is running PORT ${port}`);
});
