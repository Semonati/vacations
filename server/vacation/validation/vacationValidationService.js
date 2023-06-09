const validateVacationWithJoi = require("./Joi/validateVacationWithJoi");

const validator = undefined || "Joi";

const validateVacation = (vacation) => {
  if (validator === "Joi") return validateVacationWithJoi(vacation);
};

exports.validateVacation = validateVacation;
