const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const setDecimalNumber = val => {
  return (val * 100).toFixed(2);
};

const getDecimalNumber = val => {
  return (val / 100).toFixed(2);
};

const lineItemSchema = new mongoose.Schema(
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
    isSavings: Boolean,
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    amount: {
      type: Number,
      default: 0,
      set: setDecimalNumber,
      get: getDecimalNumber
    },
    date: {
      type: Date,
      default: Date.now
    },
    created: {
      type: Date,
      default: Date.now
    }
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

module.exports = mongoose.model("LineItem", lineItemSchema);
