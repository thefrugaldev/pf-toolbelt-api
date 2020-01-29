const mongoose = require("mongoose");
const Category = mongoose.model("Category");

// GET
exports.getCategoriesAsync = async (req, res) => {
  const categories = await Category.find();

  res.send(categories);
};

// POST
exports.createCategoryAsync = async (req, res) => {
  const category = new Category(req.body);

  await category.save();
  res.send(category);
};
