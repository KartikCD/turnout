const { addProgram } = require("./addProgram");
const { getProgram } = require("./getProgram");
const { getPrograms } = require("./getPrograms");
const { deleteProgram } = require("./deleteProgram");
const { updateProgram } = require("./updateProgram");
const { uploadProgramImage } = require("./uploadProgramImage");

module.exports = {
  addProgram,
  getProgram,
  getPrograms,
  deleteProgram,
  updateProgram,
  uploadProgramImage,
};
