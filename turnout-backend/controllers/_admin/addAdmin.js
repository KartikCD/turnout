const { Admin } = require("../../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addAdmin = async (req, res) => {
  try {
    let adminBody = {
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10),
    };

    const oldAdmin = await Admin.findOne({ email: adminBody.email });

    if (oldAdmin) {
      return res
        .status(409)
        .json({ message: "Admin already exists. Please login." });
    }

    const admin = new Admin(adminBody);
    const newAdmin = await admin.save(admin);

    const token = jwt.sign(
      { admin_id: newAdmin._id, email: newAdmin.email },
      "TURNOUT",
      {
        expiresIn: "3h",
      }
    );

    newAdmin.token = token;

    if (admin === newAdmin) {
      return res.status(201).json({
        admin: newAdmin,
      });
    } else {
      throw Error("Cannot create admin.");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addAdmin,
};
