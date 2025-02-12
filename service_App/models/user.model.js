const mysql = require("mysql2/promise");
const dbConfig = require("../config/db.config.js");
const logger = require("../utils/logger.js");

const pool = mysql.createPool(dbConfig);

const createUser = async (user) => {
  try {
    const [result] = await pool.execute(
      "INSERT INTO users (username, password, email, phone) VALUES (?,?,?,?)",
      [user.username, user.password, user.email, user.phone]
    );
    return result.insertId;
  } catch (error) {
    logger.error("Error creating user:", error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const [rows] = await pool.execute("SELECT * FROM users");
    return rows;
  } catch (error) {
    logger.error("Error getting all users:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
