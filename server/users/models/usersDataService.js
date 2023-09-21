const nodemailer = require("nodemailer");
const config = require("config");

const User = require("./mongoDB/Users");
const Messgaes = require("./mongoDB/ContactUs");
const { handleBadRequest } = require("../../utils/handleErrors");
const { generateAuthToken } = require("../../auth/Providers/jwt");
const { comparePassword, generateUserPassword } = require("../helpers/bcrypt");
const {
  generateForgotPasswordToken,
  verifayPasswordToken,
} = require("../../auth/forgotPasswordService");

const DB = process.env.DB || "MONGODB";
const EMAIL = config.get("EMAIL");
const PASSWORD = config.get("PASSWORD");

const getAllUsers = async () => {
  if (DB === "MONGODB") {
    try {
      const users = await User.find({}, { __v: 0, password: 0 });
      return Promise.resolve(users);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const getUser = async (_id) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findById({ _id }, { __v: 0, password: 0 });
      if (!user) return Promise.reject("There is no user with this ID");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      error.message = "There is no user with this ID";
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const registerUser = async (userData) => {
  if (DB === "MONGODB") {
    try {
      const { email } = userData;
      let user = await User.findOne({ email });
      if (user) return Promise.reject("User already registered");
      user = new User(userData);
      user = await user.save();
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      error.message = "User already registered";
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const loginUser = async (userData, res) => {
  if (DB === "MONGODB") {
    try {
      const { email, password } = userData;
      let user = await User.findOne({ email });
      if (!user)
        return Promise.reject(
          "Authentication Error: Invalid email or password"
        );
      const validPassword = comparePassword(password, user.password);
      if (!validPassword) {
        return Promise.reject(
          "Authentication Error: Invalid email or password"
        );
      }
      const token = generateAuthToken(user);
      return Promise.resolve(token);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const userForgotPassword = async (email) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findOne({ email });
      if (!user) return Promise.reject("User not in data base");
      const token = generateForgotPasswordToken(user);
      const link = `http://localhost:8080/users/reset-password/${user._id}/${token}`;

      let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        auth: {
          user: EMAIL,
          pass: PASSWORD,
        },
      });

      await transporter.sendMail({
        from: EMAIL,
        to: email,
        subject: "Reset password",
        text: `To enter new password please enter this link ${link}`,
      });

      return Promise.resolve(link);
    } catch (error) {
      error.status = 404;
      error.message = "This user is not in data base";
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const userPasswordTokenVerifay = async (id, token) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findOne({ _id: id });
      if (!user) return Promise.reject("User not in data base");
      const tokenPassword = verifayPasswordToken(user, token);
      return Promise.resolve(tokenPassword);
    } catch (error) {
      error.status = 400;
      error.message = "This user is not in data base";
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
};

const resetUserPassword = async (id, password) => {
  if (DB === "MONGODB") {
    try {
      let user = await User.findOne({ _id: id });
      if (!user) return Promise.reject("User not in data base");
      const validPassword = generateUserPassword(password);
      user = await User.updateOne(
        { _id: id },
        {
          $set: {
            password: validPassword,
          },
        }
      );
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      error.message = "This user is not in data base";
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
};

const updateUser = async (userId, data) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndUpdate(userId, data, {
        new: true,
      });
      if (!user)
        return Promise.reject(
          "Could not update user because a user with this ID cannot found in the database"
        );
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      error.message = "This user is not in data base";
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve("user update not in mongodb");
};

const deleteUser = async (_id) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndDelete(
        { _id },
        {
          __v: 0,
          password: 0,
        }
      );
      if (!user)
        return Promise.reject(
          "Could not delete this user because a user with this ID cannot found in the database"
        );
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      error.message = "This user is not in data base";
      return Promise.reject(error);
    }
  }
};

const contactUsMessage = async (data) => {
  if (DB === "MONGODB") {
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        auth: {
          user: EMAIL,
          pass: PASSWORD,
        },
      });

      await transporter.sendMail({
        from: data.email,
        to: EMAIL,
        subject: data.subject,
        text: data.message,
      });

      let messgae = new Messgaes(data);
      messgae = await messgae.save();
      return Promise.resolve("The message was send seccessfully");
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

exports.getAllUsers = getAllUsers;
exports.getUser = getUser;
exports.registerUser = registerUser;
exports.userForgotPassword = userForgotPassword;
exports.userPasswordTokenVerifay = userPasswordTokenVerifay;
exports.resetUserPassword = resetUserPassword;
exports.loginUser = loginUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.contactUsMessage = contactUsMessage;
