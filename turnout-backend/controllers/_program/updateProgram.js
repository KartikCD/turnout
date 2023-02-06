const { Program } = require("../../models/Program");

const updateProgram = async (req, res) => {
  try {
    const id = req.params.id;
    const program = req.body;
    const newProgram = await Program.findByIdAndUpdate(id, { $set: program });
    return res.status(200).json({ student: newProgram });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  updateProgram,
};
