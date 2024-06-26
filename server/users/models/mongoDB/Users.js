const mongoose = require("mongoose");
const Name = require("./Name");
const Address = require("./Address");

const userSchema = new mongoose.Schema({
  name: Name,
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  email: {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true,
    upsert: true,
  },
  address: Address,
  aboutMe: {
    type: String,
    maxLength: 500,
    trim: true,
    lowercase: true,
  },
  isAdmin: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
