const Joi = require("joi");

const userMessageValidation = (data) => {
  const nameAndSubject = Joi.string().min(2).max(256).required();

  const schema = Joi.object({
    name: Joi.object()
      .keys({
        first: nameAndSubject,
        last: nameAndSubject,
      })
      .required(),
    email: Joi.string()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({ message: 'user "mail" mast be a valid mail' })
      .required(),
    phone: Joi.string()
      .ruleset.regex(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
      .rule({ message: 'user "phone" mast be a valid phone number' })
      .required(),
    subject: nameAndSubject,
    message: Joi.string().min(10).max(500).required(),
  });
  return schema.validate(data);
};

module.exports = userMessageValidation;
