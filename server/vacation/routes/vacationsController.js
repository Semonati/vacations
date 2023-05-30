const express = require("express");
const auth = require("../../auth/authService");

const { handleError } = require("../../utils/handleErrors");
const {
  createVacation,
  deleteVacation,
  editVacation,
  getAllVacations,
  getThisVacation,
} = require("../models/vacationsDataService");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const vacations = await getAllVacations();
    res.send(vacations);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

// router.get("/:id", auth, async (req, res) => {
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { isAdmin, _id } = req.user;
    if (!isAdmin && id !== _id)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin user or vacation owner to see this vacation"
      );
    const vacation = await getThisVacation(id);
    return res.send(vacation);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", auth, async (req, res) => {
// router.post("/", async (req, res) => {
  try {
    const user = req.user;
    let vacation = req.body;
    vacation = await createVacation(vacation, user);
    return res.status(201).send(vacation);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

// router.put("/:id", auth, async (req, res) => {
router.put("/:id", async (req, res) => {
  const vacationId = req.params.id;
  let vacation = req.body;
  const { _id } = req.user;
  if (vacation.user_id !== _id)
    return handleError(
      res,
      403,
      "Authorization Error: You must be an vacation owner to change the data in this vacation"
    );
  vacation = await editVacation(vacationId, vacation);
  res.send(vacation);
});

// router.patch("/:id", auth, async (req, res) => {
router.patch("/:id", async (req, res) => {
  try {
    const vacationId = req.params.id;
    const { _id } = req.user;
    const card = await likeCard(vacationId, _id);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

// router.delete("/:id", auth, async (req, res) => {
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const deletedvacation = await deleteVacation(id, user);
  res.send(deletedvacation);
});

module.exports = router;
