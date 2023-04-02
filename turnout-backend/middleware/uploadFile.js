const util = require("util");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (cb) => {
    cb(null, path.resolve(__dirname, "../../", "uploads"));
  },
  filename: (file, cb) => {
    cb(null, file.originalname + "_" + Date.now());
  },
});

let fileUpload = multer({
  storage: storage,
}).single("file");

let uploadFileMiddleware = util.promisify(fileUpload);

module.exports = uploadFileMiddleware;
