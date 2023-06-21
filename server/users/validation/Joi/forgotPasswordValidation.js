const Joi = require("joi");

const forgotPasswordValidation = (user) => {
  const email = Joi.string()
    .ruleset.pattern(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    )
    .rule({ message: 'user "mail" mast be a valid mail' })
    .required();
  return email.validate(user);
};

module.exports = forgotPasswordValidation;
