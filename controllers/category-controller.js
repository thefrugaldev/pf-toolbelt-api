const mongoose = require("mongoose");
const Category = mongoose.model("Category");
const Budget = mongoose.model("Budget");

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

// DELETE
exports.deleteCategoryAsync = async (req, res) => {
  await Budget.updateMany(
    { categoryId: req.params.id },
    { $set: { categoryId: null } }
  );

  await Category.findByIdAndDelete(req.params.id);

  res.sendStatus(204);
};
