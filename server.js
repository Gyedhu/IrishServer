const express = require("express");
const fetch = require("node-fetch");
const parser = require("body-parser");
const cors = require("cors");

const app = express()
app.use(cors());
app.use(parser.json());

app.get("/", () => console.log("..."))

app.post("/get-file", async (req, res) => {
  const { url } = req.body;
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.json({ html: data });
  } catch {
    res.status(400).json("something went wrong");
  }

})

app.listen(5000);