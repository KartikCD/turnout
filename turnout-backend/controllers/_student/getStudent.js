const { Student } = require("../../models/Student");

const getStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    if (student) {
      return res.status(200).json({ student: student });
    } else {
      return res.status(500).json({ message: "Cannot find student." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getStudent,
};
