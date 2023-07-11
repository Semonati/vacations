import Joi from "joi";

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
const titleAndAddress = Joi.string().min(2).max(256).required();
export const createVacationSchema = {
  title: titleAndAddress,
  subtitle: titleAndAddress,
  creatorName: Joi.string(),
  description: Joi.string().min(2).required(),
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
  country: titleAndAddress,
  city: titleAndAddress,
  street: titleAndAddress,
  houseNumber: Joi.number().allow(""),
  zip: Joi.number().allow(""),
  price: Joi.number().allow(""),
  createdAt: Joi.string().ruleset.regex(
    /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/
  ),
  updatedAt: Joi.string().ruleset.regex(
    /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/
  ),
};
