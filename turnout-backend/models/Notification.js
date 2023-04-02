const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  studentId: {
    type: mongoose.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Notification = mongoose.model("Notification", NotificationSchema);

module.exports = {
  Notification,
};
