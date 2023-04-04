const cron = require("node-cron");
const mongoose = require("mongoose");
const NodeMailer = require("nodemailer");
const { Registration } = require("./models/Registration");
const { Student } = require("./models/Student");
const { Event } = require("./models/Event");
const { Notification } = require("./models/Notification");

mongoose
  .connect(
    "mongodb+srv://kartik:kartik1235@deepbluecluster.wnkfe.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Service running on port 5050");

    cron
      .schedule("*/1 * * * *", async () => {
        try {
          let transport = NodeMailer.createTransport({
            service: "gmail",
            auth: {
              user: "kedarkanthatrek92@gmail.com",
              pass: "pnwhkjabonowmhcc",
            },
          });
          console.log(
            `Cron job is running at ${new Date().toLocaleString()}......`
          );
          const registrations = await Registration.find({});
          registrations.map(async (register) => {
            if (register.sentEmail == true) {
              console.log("Notification already sent...");
              return false;
            } else {
              const student = await Student.findById(
                register.studentId.toString()
              );
              const event = await Event.findById(register.eventId.toString());
              if (!student) {
                return false;
              } else {
                let html = ``;
                let message = "";
                if (event) {
                  const currentDate = new Date(Date.now());
                  const dayAheadDate = new Date(event.date);
                  if (
                    currentDate.getMonth() === dayAheadDate.getMonth() &&
                    currentDate.getFullYear() === dayAheadDate.getFullYear() &&
                    dayAheadDate.getDate() - currentDate.getDate() === 1
                  ) {
                    html = `<b>Thankyou ${student.name} registering for ${register.eventName} event. This is just to notify you that event will start at ${event.reportingTime}. The venue for the event is ${event.venue}. Make sure you bring all the required documents for verification purpose. Thank you!</b>`;
                    message = `Thankyou ${student.name} registering for ${register.eventName} event. This is just to notify you that event will start at ${event.reportingTime}. The venue for the event is ${event.venue}. Make sure you bring all the required documents for verification purpose. Thank you!`;
                    await transport.sendMail({
                      from: '"Turnout Admin" <noreply@turnout.com>',
                      to: `${student.email}`,
                      subject: "Reminder!!!",
                      html: html,
                    });

                    const notification = new Notification({
                      message: message,
                      studentId: student._id,
                      date: `${new Date(Date.now()).toISOString()}`,
                    });

                    await notification.save(notification);

                    const newRegistration = {
                      ...register,
                      _doc: {
                        ...register._doc,
                        sentEmail: true,
                      },
                    };
                    await Registration.findByIdAndUpdate(register._id, {
                      $set: newRegistration,
                    });
                    console.log("Notification sent...");
                    return true;
                  } else {
                    return false;
                  }
                } else {
                  html = `<b>Sorry to say but unfortunately event ${register.eventName} has been cancelled. Sorry for the inconvenience!</b>`;
                  message = `Sorry to say but unfortunately event ${register.eventName} has been cancelled. Sorry for the inconvenience!`;

                  await transport.sendMail({
                    from: '"Turnout Admin" <noreply@turnout.com>',
                    to: `${student.email}`,
                    subject: "Reminder!!!",
                    html: html,
                  });

                  const notification = new Notification({
                    message: message,
                    studentId: student._id,
                    date: `${new Date(Date.now()).toISOString()}`,
                  });

                  await notification.save(notification);
                  const newRegistration = {
                    ...register,
                    _doc: {
                      ...register._doc,
                      sentEmail: true,
                    },
                  };
                  await Registration.findByIdAndUpdate(register._id, {
                    $set: newRegistration,
                  });
                  console.log("Notification not sent...");
                  return true;
                }
              }
            }
          });
        } catch (err) {
          console.log(err);
        }
      })
      .start();
  })
  .catch((err) => {
    console.log(err);
  });
