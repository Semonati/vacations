import Joi from "joi";

const forgotPasswordSchema = {
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: "Pleas enter a valid mail" })
    .required(),
};

export default forgotPasswordSchema;
