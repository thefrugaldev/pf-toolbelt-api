const mongoose = require("mongoose");
const MonthlyBudget = mongoose.model("MonthlyBudget");

// GET
exports.getMonthlyBudgetsAsync = async (req, res) => {
  let query = {};

  if (req.query) {
    for (let key in req.query) {
      req.query[key] !== "" ? (query[key] = req.query[key]) : null;
    }
  }

  const budgets = await MonthlyBudget.find(query).populate("categoryId");

  res.send(budgets);
};

exports.getMonthlyBudgetByIdAsync = async (req, res, next) => {
  const budget = await MonthlyBudget.findById(req.params.id);

  if (!budget) return next();

  res.send(budget);
};

// POST
exports.createMonthlyBudgetAsync = async (req, res) => {
  const budget = new MonthlyBudget(req.body);
  await budget.save();
  res.send(budget);
};

// PUT
exports.updateMonthlyBudgetAsync = async (req, res) => {
  const budget = await MonthlyBudget.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true, // return the new budget instead of the old one
      runValidators: true
    }
  ).exec();

  res.send(budget);
};

// DELETE
//TODO: Do we want to allow them to delete
// exports.deleteMonthlyBudgetAsync = async (req, res) => {
//   await MonthlyBudget.findByIdAndDelete(req.params.id);

//   res.send(204);
// };
