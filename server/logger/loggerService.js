const express = require("express");

const config = require("config");
const morganLogger = require("./loggers/morganLogger");

const app = express();
const LOGGER = config.get("LOGGER");

if (LOGGER === "morgan") app.use(morganLogger);

module.exports = app;
