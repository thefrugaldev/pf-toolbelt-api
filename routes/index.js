const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budget-controller");
const { catchErrors } = require("../handlers/error-handlers");

router.get("/", budgetController.defaultResponse);
router.get("/budgets", catchErrors(budgetController.getBudgetsAsync));
router.post("/budgets", catchErrors(budgetController.createBudgetAsync));
router.put("/budgets/:id", catchErrors(budgetController.updateBudgetAsync));

module.exports = router;
