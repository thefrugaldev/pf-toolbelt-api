const mongoose = require("mongoose");
const Category = mongoose.model("Category");

// GET
exports.getCategoriesAsync = async (req, res) => {
  const categories = await Category.find({ isActive: true });

  res.send(categories);
};

// POST
exports.createCategoryAsync = async (req, res) => {
  const category = new Category(req.body);

  await category.save();
  res.send(category);
};

// DELETE
//TODO: Do we want to set an isActive flag to replicate soft deletes?
exports.deleteCategoryAsync = async (req, res) => {
  const category = await Category.findById(req.params.id);
  category.isActive = false;

  await category.save();

  res.sendStatus(204);
};
