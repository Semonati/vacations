const express = require("express");

const { handleError } = require("../../utils/handleErrors");
const auth = require("../../auth/authService");
const normalizeUser = require("../helpers/normalizeUser");
const { generateUserPassword } = require("../helpers/bcrypt");
const {
  getAllUsers,
  getUser,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  userForgotPassword,
  userPasswordTokenVerifay,
  resetUserPassword,
} = require("../models/usersDataService");
const {
  validateRegistration,
  validateLogin,
  validateUserUpdate,
  validateForgotPassword,
} = require("../validation/userValidationService");

const app = express();
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const { isAdmin } = req.user;
    if (!isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin user to see all users in the database"
      );
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { isAdmin, _id } = req.user;
    if (!isAdmin && id !== _id)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin or user owner to see the data"
      );
    const user = await getUser(id);
    res.status(200).send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let user = req.body;
    const { error } = validateRegistration(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    user = normalizeUser(user);
    user.password = generateUserPassword(user.password);
    user = await registerUser(user);
    return res.status(201).send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = req.body;
    const { error } = validateLogin(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    user = await loginUser(user);
    return res.status(200).send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    let { email } = req.body;
    const { error } = validateForgotPassword(email);
    if (error)
    return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    email = await userForgotPassword(email);
    res.status(200).send(email);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/reset-password/:id/:token", async (req, res) => {
  try {
    const { id, token } = req.params;
    let user = await userPasswordTokenVerifay(id, token);
    res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  let user = await resetUserPassword(id, password);
  res.send(user);
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
    let user = req.body;
    const { error } = validateUserUpdate(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    if (_id !== id)
      return handleError(
        res,
        403,
        "Authorization Error: You must be user owner to update the data"
      );
    user = normalizeUser(user);
    user = await updateUser(id, user);
    return res.status(204).send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, isAdmin } = req.user;
    if (_id !== id && !isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin or user owner to delete the data"
      );
    const deletedUser = await deleteUser(id);
    return res.status(202).send(deletedUser);
  } catch (error) {}
});

module.exports = router;
