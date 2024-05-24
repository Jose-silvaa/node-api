//Controller to handle user-related operations

const ExpenseService = require("../services/ExpenseService")

const ExpenseControllers = {

    getAllExpenses(req, res){
        ExpenseService.getAllExpenses()
            .then(expenses =>{
                if(expenses.length === 0){
                    res.status(204).send();
                }else{
                    res.status(200).json({expenses})
                }
            })
            .catch(error =>{
                res.status(500).json({error : "Error searching for expenses"})
            })
    },

    createExpense(req, res){

        if(!req.body.price){
            return res.status(404).json({error : "Price is required"})
        }
        ExpenseService.createExpense(req.body)
            .then(newExpense =>{
                res.status(201).json(newExpense)
            })
            .catch(error =>{
                res.status(500).json({error : "Error creating a new expense"})
            })
            
    }
}

module.exports = ExpenseControllers
