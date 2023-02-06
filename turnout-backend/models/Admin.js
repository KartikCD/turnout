const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
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

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = {
  Admin,
};
