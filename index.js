const express = require("express");

const app = express();

app.get("*", (req, res) => {
  res.send("foo");
});

app.use((error, req, res, next) => {
  res.send("my custom error page");
});

app.listen(3000);
