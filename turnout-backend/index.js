const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cron = require("node-cron");
const NodeMailer = require("nodemailer");
const fileUpload = require("express-fileupload");

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

const { addRegistration } = require("./controllers/_registrations");
const { getNotifications } = require("./controllers/_notification");

const { verifyToken } = require("./middleware");
const { adminLogin, studentLogin } = require("./controllers/_auth");
const { Registration } = require("./models/Registration");
const { Student } = require("./models/Student");
const { Event } = require("./models/Event");
const { Notification } = require("./models/Notification");
const { uploadImage } = require("./controllers/_event/uploadImage");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  limits: {
    fileSize: 10000000  ,
  },
  abortOnLimit: true
}))
app.use("/uploads", express.static(__dirname + '/uploads'));

app.post("/admin", addAdmin);
app.post("/admin_login", adminLogin);
app.post("/student_login", studentLogin);
// app.get("/check_status", verifyToken);

// app.use(verifyToken);

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
app.post("/uploadImage/:id", uploadImage) 
app.get("/events", getEvents);
app.get("/event/:id", getEvent);
app.put("/event/:id", updateEvent);
app.delete("/event/:id", deleteEvent);

// registeration routes
app.post("/registration", addRegistration);

// notification routes
app.get("/notifications/:id", getNotifications);

app.use("*", (_req, res) => {
  return res.status(404).json({ error: "page not found." });
});

mongoose
  .connect(
    "mongodb+srv://kartik:kartik1235@deepbluecluster.wnkfe.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5050);
    console.log("Service running on port 5050");

    // cron.schedule("1 * * * *", async () => {
    //   try {
    //     let transport = NodeMailer.createTransport({
    //       service: "gmail",
    //       auth: {
    //         user: "kedarkanthatrek92@gmail.com",
    //         pass: "pnwhkjabonowmhcc",
    //       },
    //     });
    //     console.log(
    //       `Cron job is running at ${
    //         new Date(Date.now()).toLocaleDateString
    //       }......`
    //     );
    //     const registrations = await Registration.find({});
    //     registrations.map(async (register) => {
    //       if (register.sentEmail == true) {
    //         console.log("Notification already sent...");
    //         return false;
    //       } else {
    //         console.log("Sending new notification....");
    //         const student = Student.findById(register.studentId);
    //         const event = Event.findById(register.eventId);
    //         if (!student) {
    //           return false;
    //         } else {
    //           let html = ``;
    //           let message = "";
    //           if (event) {
    //             const currentDate = new Date(Date.now());
    //             const dayAheadDate = new Date(event.date);
    //             if (
    //               currentDate.getMonth() === dayAheadDate.getMonth() &&
    //               currentDate.getFullYear() === dayAheadDate.getFullYear() &&
    //               dayAheadDate.getDate() - currentDate.getDate() === 1
    //             ) {
    //               html = `<b>Thankyou for ${student.name} registering for ${register.eventName} event. This is just to notify you that event will start at ${event.reportingTime}. The venue for the event is ${event.venue}. Make sure you bring all the required documents for verification purpose. Thank you!</b>`;
    //               message = `Thankyou for ${student.name} registering for ${register.eventName} event. This is just to notify you that event will start at ${event.reportingTime}. The venue for the event is ${event.venue}. Make sure you bring all the required documents for verification purpose. Thank you!`;
    //               await transport.sendMail({
    //                 from: '"Turnout Admin" <noreply@turnout.com>',
    //                 to: `${student.email}`,
    //                 subject: "Reminder!!!",
    //                 html: html,
    //               });

    //               const notification = new Notification({
    //                 message: message,
    //                 studentId: student._id,
    //                 Date: `${new Date(Date.now()).toISOString()}`,
    //               });

    //               await notification.save(notification);
    //               const newRegistration = {
    //                 ...register,
    //                 sentEmail: true,
    //               };
    //               await Registration.findByIdAndUpdate(newRegistration._id, {
    //                 $set: newRegistration,
    //               });
    //               return true;
    //             }
    //           } else {
    //             html = `<b>Sorry to say but unfortunately event ${register.eventName} has been cancelled. Sorry for the inconvenience!</b>`;
    //             message = `Sorry to say but unfortunately event ${register.eventName} has been cancelled. Sorry for the inconvenience!`;

    //             await transport.sendMail({
    //               from: '"Turnout Admin" <noreply@turnout.com>',
    //               to: `${student.email}`,
    //               subject: "Reminder!!!",
    //               html: html,
    //             });

    //             const notification = new Notification({
    //               message: message,
    //               studentId: student._id,
    //               Date: `${new Date(Date.now()).toISOString()}`,
    //             });

    //             await notification.save(notification);
    //             const newRegistration = {
    //               ...register,
    //               sentEmail: true,
    //             };
    //             await Registration.findByIdAndUpdate(newRegistration._id, {
    //               $set: newRegistration,
    //             });
    //             return true;
    //           }
    //         }
    //       }
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });
  })
  .catch((err) => {
    console.log(err);
  });
