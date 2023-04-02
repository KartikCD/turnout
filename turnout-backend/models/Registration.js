const mongoose = require("mongoose");

const RegistrationSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventId: {
    type: mongoose.ObjectId,
    required: true,
    unique: true,
  },
  studentId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

const Registration = mongoose.model("Registration", RegistrationSchema);

module.exports = {
  Registration,
};
