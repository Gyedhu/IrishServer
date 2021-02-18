const express = require("express");
const fetch = require("node-fetch");
const parser = require("body-parser");
const cors = require("cors");

const app = express()
app.use(cors());
app.use(parser.json());

const port = process.env.PORT || 8080;

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

app.listen(port, () => console.log(`server is running in port : ${port}`));