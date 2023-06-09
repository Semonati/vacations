const Vacation = require("./mongoDB/Vacation");

const { handleBadRequest } = require("../../utils/handleErrors");

const DB = process.env.DB || "MONGODB";

const getAllVacations = async () => {
  if (DB === "MONGODB") {
    try {
      const vacations = await Vacation.find({});
      return Promise.resolve(vacations);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const getThisVacation = async (user_id) => {
  if (DB === "MONGODB") {
    try {
      const vacations = await Vacation.find({ user_id });
      return Promise.resolve(vacations);
    } catch (error) {
      error.status = 404;
      handleBadRequest("MONGODB", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const getVacation = async (vacationId) => {
  if (DB === "MONGODB") {
    try {
      const vacation = await Vacation.findById(
        { _id: vacationId },
        { __v: 0, password: 0, isAdmin: 0 }
      );
      if (!vacation)
        throw new Error("Could not find this vacation in the database");
      return Promise.resolve(vacation);
    } catch (error) {
      handleBadRequest("Mongoose", error);
      return Promise.reject(error);
    }
  }
};

const createVacation = async (normalizedVacation) => {
  if (DB === "MONGODB") {
    try {
      let vacation = new Vacation(normalizedVacation);
      vacation = await vacation.save();
      return Promise.resolve(vacation);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("Mongoose", error);
    }
  }
  return Promise.resolve([]);
};

const editVacation = async (_id, data) => {
  if (DB === "MONGODB") {
    try {
      let vacation = await Vacation.findByIdAndUpdate(_id, data, {
        new: true,
      });
      return Promise.resolve(vacation);
    } catch (error) {
      return handleBadRequest("Mongoose", error);
    }
  }
};

const likeVacation = async (vacationId, userId) => {
  if (DB === "MONGODB") {
    try {
      let vacation = await Vacation.findById(vacationId);
      if (!vacation)
        throw new Error(
          "A vacation with this ID cannot be found in the database"
        );
        const vacationLikes = vacation.likes.find((id) => id === userId);
        if (!vacationLikes) {
          vacation.likes.push(userId);
          vacation = await vacation.save();
          return Promise.resolve(vacation);
        }
        // console.log(vacation.likes);
        console.log(vacationLikes);

      const vacationFiltered = vacation.likes.filter((id) => id !== userId);
      vacation.likes = vacationFiltered;
      vacation = await vacation.save();

      return Promise.resolve(vacation);
    } catch (error) {
      error.status = 400;
      handleBadRequest("MONGODB", error);
      return Promise.resolve(error);
    }
  }
  return Promise.resolve("vacation like update!");
};

const deleteVacation = async (vacationId, user) => {
  if (DB === "MONGODB") {
    try {
      let vacation = await Vacation.findById(vacationId);
      if (!vacation)
        throw new Error(
          "could not delete this vacation because a vacation with this ID cannot be found in the database"
        );
      if (!user.isAdmin && user._id !== vacation.user_id.toHexString())
        throw new Error(
          "Authorization Error: Only the user who created the vacation or admin can delete this vacation"
        );
      vacation = await Vacation.findByIdAndDelete(vacationId);
      return Promise.resolve(vacation);
    } catch (error) {
      return handleBadRequest("Mongoose", error);
    }
  }
};

exports.getAllVacations = getAllVacations;
exports.getThisVacation = getThisVacation;
exports.getVacation = getVacation;
exports.createVacation = createVacation;
exports.editVacation = editVacation;
exports.likeVacation = likeVacation;
exports.deleteVacation = deleteVacation;
