const { Registration } = require("../../models/Registration");
const NodeMailer = require("nodemailer");
const { Student } = require("../../models/Student");
const { Notification } = require("../../models/Notification");

const addRegistration = async (req, res) => {
  try {
    const registration = new Registration(req.body);
    const newRegistration = await registration.save(registration);

    if (registration === newRegistration) {
      let transport = NodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: "kedarkanthatrek92@gmail.com",
          pass: "pnwhkjabonowmhcc",
        },
      });

      const student = await Student.findById(registration.studentId);
      if (student) {
        await transport.sendMail({
          from: '"Turnout Admin" <noreply@turnout.com>',
          to: `${student.email}`,
          subject: "Thankyou for registering",
          html: `<b>Thankyou for ${student.name} registering for ${registration.eventName} event.</b>`,
        });

        const notification = new Notification({
          message: `You have registered for ${
            registration.eventName
          } on ${new Date().toDateString()}`,
          studentId: student._id,
          date: `${new Date().toISOString()}`,
        });

        await notification.save(notification);
        return res.status(201).json({
          registration: newRegistration,
        });
      } else {
        return res.status(500).json({
          message: "You cannot register for same event twice.",
        });
      }
    } else {
      return res.status(500).json({
        message: "You cannot register for same event twice.",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addRegistration,
};
