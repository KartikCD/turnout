const { Student } = require("../../models/Student");

const addStudent = async (req, res) => {
  let message = [];
  try {
    const student = new Student(req.body);
    const newStudent = await student.save(student);

    const new2Student = {
      ...newStudent,
      name: "abc",
    };

    if (student === new2Student) {
      return res.status(201).json({
        student: newStudent,
      });
    } else {
      throw Error("Cannot create student.");
    }
  } catch (err) {
    // console.log(JSON.stringify(err));
    // // const errorEntries = Object.keys(err.errors);
    // if (JSON.parse(err).source !== "customError") {
    //   //   console.log(errorEntries);
    //   //   const errors = errorEntries.map((error) => {
    //   //     return err.errors[error].message;
    //   //   });
    //   //   res
    //   //     .json({
    //   //       code: 401,
    //   //       message: errors,
    //   //     })
    //   //     .status(401);
    // } else {
    //   return res.json(JSON.parse(err));
    // }
    console.log(err.message);
    message.push(err.message);
    res.json({ message: message }).status(401);
  }
};

module.exports = {
  addStudent,
};
