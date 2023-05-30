const jwt = require("jsonwebtoken");

const config = require("config");
const { handleBadRequest } = require("../../utils/handleErrors");

const key = config.get("JWT_KEY");

const generateAuthToken = (store) => {
  const { _id, isAdmin } = store;
  const token = jwt.sign({ _id, isAdmin }, key);
  return token;
};

const verifyToken = (tokenFromClient) => {
  try {
    const storeData = jwt.verify(tokenFromClient, key);
    return storeData;
  } catch (error) {
    return null;
  }
};

exports.generateAuthToken = generateAuthToken;
exports.verifyToken = verifyToken;
