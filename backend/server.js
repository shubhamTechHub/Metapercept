const express = require("express");
const connectDb = require("./config/dbConnection");
const Content = require("./models/contentSchema");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/content", async (req, res) => {
  const content = await Content.insertMany(req.body);
  res.status(201).json(content);
});

const server = () => {
  connectDb();
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

server();
