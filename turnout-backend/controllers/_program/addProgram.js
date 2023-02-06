const { Program } = require("../../models/Program");

const addProgram = async (req, res) => {
  try {
    const program = new Program(req.body);
    const newProgram = await program.save(program);

    if (program === newProgram) {
      return res.status(201).json({
        program: newProgram,
      });
    } else {
      throw Error("Cannot create program.");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addProgram,
};
