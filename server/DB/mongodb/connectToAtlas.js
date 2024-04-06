const mongoose = require("mongoose");
const chalk = require("chalk");

const config = require("config");
const currentTime = require("../../utils/timeService");

const name = config.get("DB_NAME");
const password = config.get("DB_PASSWORD");
const { hours, minutes, seconds } = currentTime();

mongoose
  .connect(
    `mongodb+srv://${name}:${password}@vacations.lsxbrww.mongodb.net/vacations`
  )
  .then(() =>
    console.log(
      chalk.magentaBright(
        `connect successfully to mongoDB Atlas at ${hours}:${minutes}:${seconds}!`
      )
    )
  )
  .catch((error) =>
    console.log(
      chalk.redBright.bold(
        `Mongodb Connection Error: could not connect to mongoDB ${error}`
      )
    )
  );
