const { Admin } = require("../../models/Admin");

const getAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await Admin.findById(id);
    if (admin) {
      return res.status(200).json({ admin: admin });
    } else {
      return res.status(500).json({ message: "Cannot find admin." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAdmin,
};
