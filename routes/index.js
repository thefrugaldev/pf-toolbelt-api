const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budget-controller");
const { catchErrors } = require("../handlers/error-handlers");

router.get("/", budgetController.defaultResponse);
router.get("/budgets", budgetController.getBudgets);
router.post("/budgets", catchErrors(budgetController.createBudgetAsync));

module.exports = router;
