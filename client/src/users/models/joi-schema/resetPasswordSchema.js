import Joi from "joi";
const passwordMsg =
  "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-";

const resetPasswordSchema = {
  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message: passwordMsg,
    })
    .required(),
  confirmPassword: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message: passwordMsg,
    })
    .required(),
};

export default resetPasswordSchema;
