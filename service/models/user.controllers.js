const userModel = require("../models/users.model.js");

const createUser = async (req, res) => {
  try {
    const userId = await userModel.createUser(req.body);
    res.status(201).json({ id: userId, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
