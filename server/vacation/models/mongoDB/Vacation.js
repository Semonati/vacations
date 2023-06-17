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
  phone: {
    type: String,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  web: URL,
  image: Image,
  address: Address,
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Vacation = mongoose.model("vacations", vacationSchema);

module.exports = Vacation;
