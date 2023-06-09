import Joi from "joi";

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

export const createVacationSchema = {
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'vacation "phone" mast be a valid phone number' })
    .allow(""),
  webUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'vacation "web" must be a valid url' })
    .allow(""),
  imageUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'vacation.image "url" mast be a valid url' })
    .allow(""),
  imageAlt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().allow(""),
  city: Joi.string().allow(""),
  street: Joi.string().allow(""),
  houseNumber: Joi.number().allow(""),
  zip: Joi.number().allow(""),
};
