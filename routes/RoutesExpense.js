const express = require("express")
const router = express.Router();
const ExpenseController = require("../controllers/ExpenseController")


// Route to list all Expenses
router.get("/expense", ExpenseController.getAllExpenses);

//Route to create a new Expense
router.post("/newExpense", ExpenseController.createExpense);

//Route to delete a expense
router.delete("/delete/:id", ExpenseController.deleteExpense)

//Route to update a expense
router.put("/update/:id", ExpenseController.updateExpense)

module.exports = router