exports.defaultResponse = (req, res) => {
  res.send("Connected!");
};

exports.getBudgets = (req, res) => {
  res.send("Here are all of your budgets");
};

exports.createBudget = (req, res) => {
  res.json(req.body);
};
