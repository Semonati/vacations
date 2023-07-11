const bcrypt = require("bcryptjs");
const config = require("config");

const BCRYPT_SALT = config.get("BCRYPT_SALT");

const generateUserPassword = (password) => {
  return bcrypt.hashSync(password, BCRYPT_SALT);
};

const comparePassword = (password, anotherPassword) => {
  return bcrypt.compareSync(password, anotherPassword);
};

exports.generateUserPassword = generateUserPassword;
exports.comparePassword = comparePassword;
