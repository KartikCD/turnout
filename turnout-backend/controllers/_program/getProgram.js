const { Program } = require("../../models/Program");

const getProgram = async (req, res) => {
  try {
    const id = req.params.id;
    const program = await Program.findById(id);
    if (program) {
      return res.status(200).json({ program: program });
    } else {
      return res.status(500).json({ message: "Cannot find program." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProgram,
};
