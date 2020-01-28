const mongoose = require("mongoose");
const Budget = mongoose.model("Budget");

exports.defaultResponse = (req, res) => {
  res.send("Connected!");
};

exports.getBudgetsAsync = async (req, res) => {
  const budgets = await Budget.find();
  console.log(budgets);

  res.send(budgets);
};

exports.getBudgetByIdAsync = async (req, res, next) => {
  const budget = await Budget.findById(req.params.id);

  if (!budget) return next();

  res.send(budget);
};

exports.createBudgetAsync = async (req, res) => {
  const budget = new Budget(req.body);
  await budget.save();
  res.redirect("/");
};

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
