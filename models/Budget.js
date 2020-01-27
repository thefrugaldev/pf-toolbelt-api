const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Please provide a title for this budget"
  },
  description: {
    type: String,
    trim: true
  },
  categoryId: Number,
  month: Number,
  day: Number,
  year: Number,
  userId: Number,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Budget", budgetSchema);
