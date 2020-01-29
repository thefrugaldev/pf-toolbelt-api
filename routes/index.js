const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budget-controller");
const categoryController = require("../controllers/category-controller");
const { catchErrors } = require("../handlers/error-handlers");

//TODO
// router.get("/", budgetController.defaultResponse);

// Budgets
router.get("/budgets", catchErrors(budgetController.getBudgetsAsync));
router.get("/budgets/:id", catchErrors(budgetController.getBudgetByIdAsync));
router.post("/budgets", catchErrors(budgetController.createBudgetAsync));
router.put("/budgets/:id", catchErrors(budgetController.updateBudgetAsync));

// Categories
router.get("/categories", catchErrors(categoryController.getCategoriesAsync));
router.post("/categories", catchErrors(categoryController.createCategoryAsync));

module.exports = router;
