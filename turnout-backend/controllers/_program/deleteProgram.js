const { Program } = require("../../models/Program");

const deleteProgram = async (req, res) => {
  try {
    const id = req.params.id;
    await Program.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Program deleted successfully.",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  deleteProgram,
};
