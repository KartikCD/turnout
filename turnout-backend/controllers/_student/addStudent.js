const { Student } = require("../../models/Student");
const bcrypt = require("bcrypt");

const addStudent = async (req, res) => {
  try {
    const studentBody = {
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10),
    };
    const student = new Student(studentBody);
    const newStudent = await student.save(student);

    if (student === newStudent) {
      return res.status(201).json({
        student: newStudent,
      });
    } else {
      throw Error("Cannot create student.");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addStudent,
};
