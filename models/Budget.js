const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const budgetSchema = new mongoose.Schema(
  {
    month: {
      type: Number,
      default: new Date().getMonth() + 1
    },
    year: {
      type: Number,
      default: new Date().getFullYear()
    },
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
