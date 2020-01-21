const mongoose = require("mongoose");
const Budget = mongoose.model("Budget");

exports.defaultResponse = (req, res) => {
  res.send("Connected!");
};

exports.getBudgets = (req, res) => {
  res.send("Here are all of your budgets");
};

exports.createBudgetAsync = async (req, res) => {
  const budget = new Budget(req.body);
  await budget.save();
  res.redirect("/");
};
