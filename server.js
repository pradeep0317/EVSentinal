const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

// 🔥 FIX HERE
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));