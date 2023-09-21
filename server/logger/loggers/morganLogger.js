const chalk = require("chalk");
const morgan = require("morgan");

const { createErrorFile, createFolder } = require("../../logger/handleLogsFiles");
const currentTime = require("../../utils/timeService");

createFolder();
const morganLogger = morgan((tokens, req, res) => {
  const { year, month, day, hours, minutes, seconds } = currentTime();
  const currentDate = `[${day}/${month}/${year} ${hours}:${minutes}:${seconds}]`;

  if (tokens.status(req, res) >= 400) {
    const errorReq = chalk.redBright(
      [
        currentDate,
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        "-",
        tokens["response-time"](req, res),
        "ms",
      ].join(" ")
    );
    createErrorFile([currentDate, tokens.status(req, res)].join(" "));
    return errorReq;
  }
  return chalk.cyanBright(
    [
      currentDate,
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ")
  );
});

module.exports = morganLogger;
