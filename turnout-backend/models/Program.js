const mongoose = require("mongoose");

const ProgramSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
});

const Program = mongoose.model("Program", ProgramSchema);

module.exports = {
  Program,
};
