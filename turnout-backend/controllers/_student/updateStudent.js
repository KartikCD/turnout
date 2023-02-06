const { Student } = require("../../models/Student");

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = req.body;
    const newStudent = await Student.findByIdAndUpdate(id, { $set: student });
    return res.status(200).json({ student: newStudent });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  updateStudent,
};
