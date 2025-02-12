const logger = require("../utils/logger.js");

const errorHandler = (err, req, res, next) => {
  logger.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

module.exports = {
  errorHandler,
};
