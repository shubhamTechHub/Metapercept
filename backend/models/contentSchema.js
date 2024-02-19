const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  ShortDesc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Content", contentSchema);
