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
  contactUsMessage,
} = require("../models/usersDataService");
const {
  validateRegistration,
  validateLogin,
  validateUserUpdate,
  validateForgotPassword,
} = require("../validation/userValidationService");
const userMessageValidation = require("../validation/Joi/userMessageValidation");

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
    return handleError(res, error.status || 500, error);
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
    return handleError(res, error.status || 500, error);
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
    return handleError(res, error.status || 500, error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = req.body;
    const { error } = validateLogin(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    user = await loginUser(user,res);
    return res.status(200).send(user);
  } catch (error) {
    return handleError(res, error.status || 404, error);
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
    return handleError(res, error.status || 500, error);
  }
});

router.get("/reset-password/:id/:token", async (req, res) => {
  try {
    const { id, token } = req.params;
    let password = await userPasswordTokenVerifay(id, token);
    if (!password)
      return res.status(404).send("This link is no more available to use");
    return res.send(
      require("openurl").open("http://localhost:3000/enter-new-password")
    );
  } catch (error) {
    return handleError(res, error.status || 500, error);
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    let user = await resetUserPassword(id, password);
    res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error);
  }
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
    return handleError(res, error.status || 500, error);
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
  } catch (error) {
    return handleError(res, error.status || 500, error);
  }
});

router.post("/contact-us", async (req, res) => {
  try {
    let data = req.body;
    const { error } = userMessageValidation(data);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    data = await contactUsMessage(data);
    return res.status(202).send(data);
  } catch (error) {
    return handleError(res, error.status || 500, error);
  }
});

module.exports = router;
