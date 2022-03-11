const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
  name: String,
  description: String,
  tags: [String],
  dateCreated: { type: Date, default: Date.now },
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
