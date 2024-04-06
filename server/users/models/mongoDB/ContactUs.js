const mongoose = require("mongoose");
const Name = require("./Name");

const messageSchema = new mongoose.Schema({
  name: Name,
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
  },
  subject: {
    type: String,
    minLength: 2,
    maxLength: 500,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    minLength: 2,
    maxLength: 500,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Messages = mongoose.model("messages", messageSchema);

module.exports = Messages;
