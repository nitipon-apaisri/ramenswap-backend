const express = require("express");
const app = express();
const logger = require("./middlewares/logger");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
app.use(express.json());
app.use(logger);
app.use(router);
app.use(errorHandler);
module.exports = app;
