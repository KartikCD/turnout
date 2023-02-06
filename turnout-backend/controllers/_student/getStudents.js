const { Student } = require("../../models/Student");

const getStudents = async (_req, res) => {
  try {
    const students = await Student.find({});
    return res.status(200).json({ students: students });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getStudents,
};
