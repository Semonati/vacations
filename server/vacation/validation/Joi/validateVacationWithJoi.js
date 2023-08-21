const Joi = require("joi");

const validateVacationWithJoi = (vacation) => {
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  const titleAndAddress = Joi.string().min(2).max(256).required();

  const schema = Joi.object({
    title: titleAndAddress,
    creatorName: Joi.string(),
    subtitle: titleAndAddress,
    description: Joi.string().min(2).required(),
    phone: Joi.string()
      .ruleset.regex(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
      .rule({ message: 'vacation "phone" mast be a valid phone number' })
      .allow(""),
    web: Joi.string()
      .ruleset.regex(urlRegex)
      .rule({ message: 'vacation "web" must be a valid url' })
      .allow(""),

    image: Joi.object().keys({
      url: Joi.string()
        .ruleset.regex(urlRegex)
        .rule({ message: 'vacation.image "url" mast be a valid url' })
        .allow(""),
      alt: Joi.string().min(2).max(256).allow(""),
    }),
    address: Joi.object().keys({
      state: Joi.string().allow("").min(2),
      country: titleAndAddress,
      city: titleAndAddress,
      street: titleAndAddress,
      houseNumber: Joi.number().allow(""),
      zip: Joi.number().allow(""),
    }),
    price: Joi.number().allow(""),
    user_id: Joi.string().allow(""),
    updatedAt: Joi.string().allow(""),
    createdAt: Joi.string().allow(""),
  });
  return schema.validate(vacation);
};

module.exports = validateVacationWithJoi;
