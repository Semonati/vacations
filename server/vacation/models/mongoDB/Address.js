const mongoose = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidators");

const Address = new mongoose.Schema({
  state: {
    type: String,
    maxLength: 256,
    trim: true,
  },
  country: DEFAULT_VALIDATION,
  city: DEFAULT_VALIDATION,
  street: {
    type: String,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
  houseNumber: {
    type: Number,
    trim: true,
    minLength: 1,
  },
  zip: {
    type: Number,
    trim: true,
    default: 0,
  },
});

module.exports = Address;
