const { Admin } = require("../../models/Admin");

const deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await Admin.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Admin deleted successfully.",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  deleteAdmin,
};
