const { Admin } = require("../../models/Admin");

const updateAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = req.body;
    const newAdmin = await Admin.findByIdAndUpdate(id, { $set: admin });
    return res.status(200).json({ admin: newAdmin });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  updateAdmin,
};
