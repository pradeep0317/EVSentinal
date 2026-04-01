const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// SERVE HTML FILES
app.use(express.static(path.join(__dirname, "public")));

// INPUT (website → unity)
let inputData = {};

// OUTPUT (unity → website)
let outputData = {};

app.post("/data", (req, res) => {
  inputData = req.body;
  res.json({ status: "ok" });
});

app.get("/data", (req, res) => {
  res.json(inputData);
});

app.post("/output", (req, res) => {
  outputData = req.body;
  res.json({ status: "received" });
});

app.get("/output", (req, res) => {
  res.json(outputData);
});

// 🔥 OPTIONAL (extra safety)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
