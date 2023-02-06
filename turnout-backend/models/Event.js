const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  programId: {
    type: mongoose.ObjectId,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return v && v.getTime() > Date.now() + 24 * 60 * 60 * 1000;
      },
    },
  },
  reportingTime: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  contactDetails: {
    type: String,
  },
  poster: {
    type: String,
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = {
  Event,
};
