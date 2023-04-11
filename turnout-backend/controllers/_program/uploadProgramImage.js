const path = require("path");
const { Program } = require("../../models/Program");

const uploadProgramImage = async (req, res) => {
  try {
    const id = req.params.id;
    const image = req.files.files;
    if (!image) {
      return;
    }

    if (image.mimetype !== "image/png") {
      return res.status(400).json({ message: "Invalid image" });
    }
    const randomNumber = Math.floor(Math.random() * (999999 - 111111) + 111111);
    const fileName = `${randomNumber}${image.name}`;
    image.mv(
      `${path.resolve(
        __dirname,
        "../../",
        "uploads/program_files/"
      )}/${fileName}`
    );

    const program = await Program.findById(id);
    console.log(program);
    const newProgram = {
      ...program,
      _doc: {
        ...program._doc,
        poster: fileName,
      },
    };

    await Program.findByIdAndUpdate(id, { $set: newProgram });
    return res
      .status(200)
      .json({ message: "Image for event uploaded successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  uploadProgramImage,
};
