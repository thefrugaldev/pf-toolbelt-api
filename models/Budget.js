const Money = require("./Money").schema;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

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
  categoryId: {
    type: mongoose.Schema.Types.ObjectId
  },
  price: {
    type: String //TODO: add support for Money schema
  },
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
