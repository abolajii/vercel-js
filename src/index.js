const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello, JavaScript with Express on Vercel Edited!" });
});

module.exports = (req, res) => app(req, res);
