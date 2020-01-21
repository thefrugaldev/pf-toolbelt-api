const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Please provide a title for this budget"
  },
  categoryId: Number,
  month: Number,
  day: Number,
  year: Number,
  userId: Number
});

module.exports = mongoose.model("Budget", budgetSchema);
