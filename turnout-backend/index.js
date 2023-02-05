const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { addStudent } = require("./controllers/_student/addStudent");

const app = express();
app.use(cors());
app.use(express.json());

// student routes
app.post("/student", addStudent);

app.use((_req, res) => {
  return res.status(404).json({ error: "page not found." });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/turnout")
  .then(() => {
    app.listen(5050);
    console.log("Service running on port 5050");
  })
  .catch((err) => {
    console.log(err);
  });
