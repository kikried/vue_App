const express = require("express");
const app = express();
const port = 3000;
const logger = require("./utils/logger.js");
const { errorHandler } = require("./middlewares/error.middleware.js");
const { authenticate } = require("./middlewares/auth.middleware.js");

// 解析 JSON 格式的请求体
app.use(express.json());

// 引入路由
const userRoutes = require("./routes/users.routes.js");
app.use("/users", authenticate, userRoutes);

// 错误处理中间件
app.use(errorHandler);

// 启动服务器
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
