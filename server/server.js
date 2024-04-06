const express = require("express");
const chalk = require("chalk");
const config = require("config");
const mongoose = require("mongoose");

const router = require("./router/router");
const cors = require("./middlewares/cors");
const logger = require("./logger/loggerService");
const { handleError } = require("./utils/handleErrors");
const connectToDb = require("./DB/dbService");
const { getIoServer } = require("./users/helpers/socketio");
const app = express();

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(router);
mongoose.set("strictQuery", false);

app.use((err, req, res, next) => {
  handleError(res, 500, err.message);
});

const PORT = config.get("PORT");
const server = app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
  connectToDb();
});

getIoServer(server);
