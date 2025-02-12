const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  jwt.verify(token.replace("Bearer ", ""), secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = {
  authenticate,
};
