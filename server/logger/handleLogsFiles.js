const FileSystem = require("fs");
const currentTime = require("../utils/timeService");

const { day, month, year } = currentTime();

const createFolder = () => {
  FileSystem.mkdir("./logger/logs", { recursive: true }, (error) => {
    if (error) return console.log(error.message);
  });
};

const createErrorFile = (errorValue) => {
  const fileName = `${day}.${month}.${year}`;
  FileSystem.writeFile(
    __dirname + `/logs/${fileName}.log`,
    ` ${errorValue}\n`,
    { flag: "a" },
    (error) => {
      if (error) return console.log(error.message);
    }
  );
};

const addErrorToLogsFiles = (message) => {
  const fileName = `${day}.${month}.${year}`;
  FileSystem.writeFile(
    __dirname + `/logs/${fileName}.log`,
    `${message}`,
    { flag: "a" },
    (error) => {
      if (error) return console.log(error.message);
    }
  );
};

exports.createFolder = createFolder;
exports.createErrorFile = createErrorFile;
exports.addErrorToLogsFiles = addErrorToLogsFiles;
