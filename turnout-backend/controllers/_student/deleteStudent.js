const { Student } = require("../../models/Student");

const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await Student.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Student deleted successfully.",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  deleteStudent,
};
