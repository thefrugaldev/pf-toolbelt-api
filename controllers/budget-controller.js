const mongoose = require("mongoose");
const Budget = mongoose.model("Budget");

// GET
exports.getBudgetsAsync = async (req, res) => {
  const budgets = await Budget.find();

  res.send(budgets);
};

exports.getBudgetByIdAsync = async (req, res, next) => {
  const budget = await Budget.findById(req.params.id);

  if (!budget) return next();

  res.send(budget);
};

// POST
exports.createBudgetAsync = async (req, res) => {
  const budget = new Budget(req.body);
  await budget.save();
  res.send(budget);
};

// PUT
exports.updateBudgetAsync = async (req, res) => {
  const budget = await Budget.findByIdAndUpdate(
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
exports.deleteBudgetAsync = (req, res) => {};
