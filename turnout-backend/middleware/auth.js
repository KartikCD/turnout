const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log(req.url);
  const token =
    req.body.token ||
    req.query.token ||
    req.params.token ||
    req.headers["x-access-token"];
  if (!token) {
    return res
      .status(403)
      .json({ message: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(token, "TURNOUT");
    req.user = decoded;
    if (req.url === "/check_status") {
      return res.status(200).json({ message: "go ahead." });
    } else {
      return next();
    }
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = {
  verifyToken,
};
