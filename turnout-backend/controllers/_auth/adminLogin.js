const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../../models/Admin");

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      const token = jwt.sign({ admin_id: admin._id, email }, "TURNOUT", {
        expiresIn: "3h",
      });

      admin.token = token;

      return res.status(200).json({ name: admin.name, token: admin.token, department: admin.department, email: admin.email  });
    }
    return res.status(400).json({ message: "Incorrect username or password." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  adminLogin,
};
