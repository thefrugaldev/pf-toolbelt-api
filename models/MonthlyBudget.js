const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const setDecimalNumber = val => {
  return (val * 100).toFixed(2);
};

const getDecimalNumber = val => {
  return (val / 100).toFixed(2);
};

const monthlyBudgetSchema = new mongoose.Schema(
  {
    month: Number,
    year: Number,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    lineItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "LineItem" }]
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

module.exports = mongoose.model("MonthlyBudget", monthlyBudgetSchema);
