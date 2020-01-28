const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budget-controller");
const { catchErrors } = require("../handlers/error-handlers");

router.get("/", budgetController.defaultResponse);
// Budgets
router.get("/budgets", catchErrors(budgetController.getBudgetsAsync));
router.get("/budgets/:id", catchErrors(budgetController.getBudgetByIdAsync));
router.post("/budgets", catchErrors(budgetController.createBudgetAsync));
router.put("/budgets/:id", catchErrors(budgetController.updateBudgetAsync));

module.exports = router;
