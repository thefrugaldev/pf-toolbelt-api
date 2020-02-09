const mongoose = require("mongoose");
const LineItem = mongoose.model("LineItem");

// GET
exports.getLineItemsAsync = async (req, res) => {
  let query = {};

  if (req.query) {
    for (let key in req.query) {
      req.query[key] !== "" ? (query[key] = req.query[key]) : null;
    }
  }

  const lineItems = await LineItem.find(query).populate("category");

  res.send(lineItems);
};

exports.getLineItemByIdAsync = async (req, res, next) => {
  const lineItem = await LineItem.findById(req.params.id).populate("category");

  if (!lineItem) return next();

  res.send(lineItem);
};

// POST
exports.createLineItemAsync = async (req, res) => {
  const lineItem = new LineItem(req.body);
  await lineItem.save();
  res.send(lineItem);
};

// PUT
exports.updateLineItemAsync = async (req, res) => {
  const lineItem = await LineItem.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true, // return the new budget instead of the old one
      runValidators: true
    }
  ).exec();

  res.send(lineItem);
};

// DELETE
exports.deleteLineItemAsync = async (req, res) => {
  await LineItem.findByIdAndDelete(req.params.id);

  res.send(204);
};
