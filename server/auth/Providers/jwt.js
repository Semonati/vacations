const jwt = require("jsonwebtoken");

const config = require("config");

const key = config.get("JWT_KEY");

const generateAuthToken = (vacation) => {
  const { _id, isAdmin, name, email, createdAt, aboutMe, phone, address } =
    vacation;
  const token = jwt.sign(
    { _id, isAdmin, name, email, createdAt, aboutMe, phone, address },
    key
  );
  return token;
};

const verifyToken = (tokenFromClient) => {
  try {
    const vacationData = jwt.verify(tokenFromClient, key);
    return vacationData;
  } catch (error) {
    return null;
  }
};

exports.generateAuthToken = generateAuthToken;
exports.verifyToken = verifyToken;
