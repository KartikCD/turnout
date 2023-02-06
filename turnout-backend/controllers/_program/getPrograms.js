const { Program } = require("../../models/Program");

const getPrograms = async (_req, res) => {
  try {
    const programs = await Program.find({});
    return res.status(200).json({ programs: programs });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPrograms,
};
