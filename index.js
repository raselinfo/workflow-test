const express = require("express");
const app = express();

app.get("/", (_red, res) => {
  res.send("OK");
});

app.listen(4000, () => {
  console.lg("http://localhost:4000");
});
