const express = require("express");

const router = express.Router();
const { handleError } = require("../utils/handleErrors");
const vacationsControllers = require("../vacation/routes/vacationsController");
const usersControllers = require("../users/routes/usersController");

router.use("/vacations", vacationsControllers);
router.use("/users", usersControllers);

router.use((req, res) => {
  handleError(res, 404, "Page not found!");
});

module.exports = router;
