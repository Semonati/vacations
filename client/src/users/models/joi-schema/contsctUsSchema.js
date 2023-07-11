import Joi from "joi";

const nameAndSubject = Joi.string().min(2).max(256).required();

const contsctUsSchema = {
  first: nameAndSubject,
  last: nameAndSubject,
  subject: nameAndSubject,
  message: Joi.string().min(10).max(500).required(),
  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'user "phone" must be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'user "mail" must be a valid mail' })
    .required(),
};

export default contsctUsSchema;
