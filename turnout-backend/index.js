const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Students
const {
  addStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("./controllers/_student");

// Admins
const {
  addAdmin,
  getAdmin,
  getAdmins,
  deleteAdmin,
  updateAdmin,
} = require("./controllers/_admin");

// Programs
const {
  getProgram,
  getPrograms,
  addProgram,
  updateProgram,
  deleteProgram,
} = require("./controllers/_program");

// events
const {
  addEvent,
  deleteEvent,
  updateEvent,
  getEvent,
  getEvents,
} = require("./controllers/_event");

const { verifyToken } = require("./middleware");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/admin", addAdmin);

app.use(verifyToken);

// student routes
app.post("/student", addStudent);
app.get("/students", getStudents);
app.get("/student/:id", getStudent);
app.put("/student/:id", updateStudent);
app.delete("/student/:id", deleteStudent);

// admin routes
app.get("/admins", getAdmins);
app.get("/admin/:id", getAdmin);
app.put("/admin/:id", updateAdmin);
app.delete("/admin/:id", deleteAdmin);

// program routes
app.post("/program", addProgram);
app.get("/programs", getPrograms);
app.get("/program/:id", getProgram);
app.put("/program/:id", updateProgram);
app.delete("/program/:id", deleteProgram);

// event routes
app.post("/event", addEvent);
app.get("/events", getEvents);
app.get("/event/:id", getEvent);
app.put("/event/:id", updateEvent);
app.delete("/event/:id", deleteEvent);

app.use("*", (_req, res) => {
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
