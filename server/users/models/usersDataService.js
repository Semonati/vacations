const User = require("./mongoDB/Users");

const { handleBadRequest } = require("../../utils/handleErrors");
const { generateAuthToken } = require("../../auth/Providers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

const DB = process.env.DB || "MONGODB";

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
      if (!user) throw new Error("There is no user with this ID");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
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
      if (user) throw new Error("User already registered");
      user = new User(userData);
      user = await user.save();
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const loginUser = async (userData) => {
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

const updateUser = async (userId, data) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndUpdate(userId, data, {
        new: true,
      });
      if (!user)
        throw new Error(
          "Could not update user because a user with this ID cannot found in the database"
        );
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
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
        throw new Error(
          "Could not delete this user because a user with this ID cannot found in the database"
        );
      return Promise.resolve(user);
    } catch (error) {}
  }
};

exports.getAllUsers = getAllUsers;
exports.getUser = getUser;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
