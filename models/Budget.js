const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const setDecimalNumber = val => {
  return (val * 100).toFixed(2);
};

const getDecimalNumber = val => {
  return (val / 100).toFixed(2);
};

const budgetSchema = new mongoose.Schema(
  {
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
      type: Number,
      default: 0,
      set: setDecimalNumber,
      get: getDecimalNumber
    },
    month: Number,
    day: Number,
    year: Number,
    userId: Number,
    created: {
      type: Date,
      default: Date.now
    }
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

module.exports = mongoose.model("Budget", budgetSchema);
