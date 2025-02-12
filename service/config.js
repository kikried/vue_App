// config.js
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "your_database_name",
  "your_username",
  "your_password",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false, // 关闭 SQL 日志输出
  }
);

module.exports = sequelize;
