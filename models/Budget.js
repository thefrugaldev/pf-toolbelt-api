const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const budgetSchema = new mongoose.Schema(
  {
    month: Number,
    year: Number,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    lineItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "LineItem" }],
    created: {
      type: Date,
      default: Date.now
    }
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

module.exports = mongoose.model("Budget", budgetSchema);
