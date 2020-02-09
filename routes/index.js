const express = require("express");
const router = express.Router();
const lineItemController = require("../controllers/line-item-controller");
const categoryController = require("../controllers/category-controller");
const { catchErrors } = require("../handlers/error-handlers");

//TODO: Add user authorization to controllers
// Budgets
router.get("/line-items", catchErrors(lineItemController.getLineItemsAsync));
router.get(
  "/line-items/:month/:year",
  catchErrors(lineItemController.getLineItemsByMonthAndYear)
);
router.get(
  "/line-items/:id",
  catchErrors(lineItemController.getLineItemByIdAsync)
);
router.post("/line-items", catchErrors(lineItemController.createLineItemAsync));
router.put(
  "/line-items/:id",
  catchErrors(lineItemController.updateLineItemAsync)
);
router.delete(
  "/line-items/:id",
  catchErrors(lineItemController.deleteLineItemAsync)
);

// // Categories
router.get("/categories", catchErrors(categoryController.getCategoriesAsync));
router.post("/categories", catchErrors(categoryController.createCategoryAsync));
router.delete(
  "/categories/:id",
  catchErrors(categoryController.deleteCategoryAsync)
);

module.exports = router;
