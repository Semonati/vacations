const express = require("express");
const auth = require("../../auth/authService");
const { validateVacation } = require("../validation/vacationValidationService");
const { handleError } = require("../../utils/handleErrors");
const {
  createVacation,
  deleteVacation,
  editVacation,
  getAllVacations,
  getThisVacation,
  getVacation,
  likeVacation,
} = require("../models/vacationsDataService");
const normalizeVacation = require("../helpers/normalizeVacation");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const vacations = await getAllVacations();
    
    res.send(vacations);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/my-vacations", auth, async (req, res) => {
  try {
    const { _id } = req.user;
    const vacation = await getThisVacation(_id);
    return res.send(vacation);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const vacation = await getVacation(id);
    return res.send(vacation);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});
router.post("/", auth, async (req, res) => {
  try {
    const user = req.user;
    let vacation = req.body;
    const { error } = validateVacation(vacation);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    vacation = await normalizeVacation(vacation, user._id);

    vacation = await createVacation(vacation);
    return res.status(201).send(vacation);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  let vacation = req.body;
  const { _id } = req.user;
  if (vacation.user_id !== _id)
    return handleError(
      res,
      403,
      "Authorization Error: You must be an vacation owner to change the data in this vacation"
    );
  vacation = await editVacation(id, vacation);
  res.send(vacation);
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const vacationId = req.params.id;
    const { _id } = req.user;
    const vacation = await likeVacation(vacationId, _id);
    return res.send(vacation);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const deletedvacation = await deleteVacation(id, user);
  res.send(deletedvacation);
});

module.exports = router;
