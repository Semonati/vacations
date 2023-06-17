const Joi = require("joi");

const registerValidation = (user) => {
  const nameAndAddress = Joi.string().min(2).max(256).required();

  const schema = Joi.object({
    name: Joi.object()
      .keys({
        first: nameAndAddress,
        last: nameAndAddress,
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
    password: Joi.string()
      .ruleset.regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
      )
      .rule({
        message:
          'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
      })
      .required(),
    address: Joi.object()
      .keys({
        state: Joi.string().allow(""),
        country: nameAndAddress,
        city: nameAndAddress,
        street: nameAndAddress,
        houseNumber: Joi.number().allow(""),
        zip: Joi.number().allow(""),
      })
      .required(),
    isAdmin: Joi.boolean().allow(""),
    aboutMe: Joi.string().max(500).allow(""),
  });
  return schema.validate(user);
};

module.exports = registerValidation;
