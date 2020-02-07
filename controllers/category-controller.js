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

// DELETE
//TODO: Do we want to set an isActive flag to replicate soft deletes?
// exports.deleteCategoryAsync = async (req, res) => {
//   TODO: Is this really what we want to do?
//   await MonthlyBudget.updateMany(
//     { categoryId: req.params.id },
//     { $set: { categoryId: null } }
//   );

//   await Category.findByIdAndDelete(req.params.id);

//   res.sendStatus(204);
// };
