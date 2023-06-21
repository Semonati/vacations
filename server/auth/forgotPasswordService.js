const jwt = require("jsonwebtoken");
const config = require("config");

const key = config.get("JWT_KEY");

const generateForgotPasswordToken = (user) => {
  const secret = key + user.password;
  const payload = {
    email: user.email,
    id: user._id,
  };
  const passwordToken = jwt.sign(payload, secret, { expiresIn: "5m" });
  return passwordToken;
};

const verifayPasswordToken = (user, token) => {
  const secret = key + user.password;
  try {
    const verify = jwt.verify(token, secret);
    return verify;
  } catch (error) {
    return null;
  }
};

exports.generateForgotPasswordToken = generateForgotPasswordToken;
exports.verifayPasswordToken = verifayPasswordToken;
