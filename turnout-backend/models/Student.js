const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    enum: ["B.Com", "BSc IT", "BCA", "BSc CS", "BA", "BAF"],
    required: true,
  },
  token: {
    type: String,
  },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = {
  Student,
};
