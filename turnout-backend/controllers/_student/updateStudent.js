const { Student } = require("../../models/Student");
const bcrypt = require("bcrypt");

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    let student = req.body;
    if (
      (student.password !== undefined || student.password !== null) &&
      (student.newPassword !== undefined || student.newPassword !== null)
    ) {
      const studentDetail = await Student.findById(id);
      console.log(student.password);
      const result = await bcrypt.compare(
        student.password,
        studentDetail.password
      );
      if (result === false) {
        return res.status(500).json({ message: "Password did not match." });
      } else {
        student = {
          ...student,
          password: await bcrypt.hash(student.newPassword, 10),
        };

        delete student.newPassword;
      }
    }
    const newStudent = await Student.findByIdAndUpdate(id, { $set: student });
    return res.status(200).json({ student: newStudent });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  updateStudent,
};
