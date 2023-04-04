const { Student } = require("../../models/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });

    if (student && (await bcrypt.compare(password, student.password))) {
      const token = jwt.sign(
        { student_id: student._id, email: email },
        "TURNOUT",
        { expiresIn: "3h" }
      );

      student.token = token;

      return res.status(200).json({ student });
    }
    return res.status(401).json({ message: "Incorrect username or password." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  studentLogin,
};
