const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budget-controller");

router.get("/", budgetController.defaultResponse);
router.get("/budgets", budgetController.getBudgets);
router.post("/budgets", budgetController.createBudget);

module.exports = router;
