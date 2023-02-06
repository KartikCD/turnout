const { Admin } = require("../../models/Admin");

const getAdmins = async (_req, res) => {
  try {
    const admins = await Admin.find({});
    return res.status(200).json({ admins: admins });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAdmins,
};
