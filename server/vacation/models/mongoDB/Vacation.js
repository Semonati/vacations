const mongoose = require("mongoose");
const Address = require("./Address");
const Image = require("./Image");
const { DEFAULT_VALIDATION, URL } = require("../../helpers/mongooseValidators");

const vacationSchema = new mongoose.Schema({
  title: DEFAULT_VALIDATION,
  creatorName: DEFAULT_VALIDATION,
  subtitle: DEFAULT_VALIDATION,
  description: {
    ...DEFAULT_VALIDATION,
    maxLength: 1024,
  },
  price: {
    type: Number,
    trim: true,
    default: 0,
  },
  phone: {
    type: String,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  web: URL,
  image: Image,
  address: Address,
  likes: [String],
  createdAt: {
    type: String,
    match: RegExp(
      /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/
    ),
  },
  updatedAt: {
    type: String,
    match: RegExp(
      /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/
    ),
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Vacation = mongoose.model("vacations", vacationSchema);

module.exports = Vacation;
