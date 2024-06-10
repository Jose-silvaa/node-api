//Controller to handle user-related operations

const ExpenseService = require("../services/ExpenseService")
const Expense = require("../models/Expense")


const ExpenseControllers = {

    getAllExpenses(req, res){
        ExpenseService.getAllExpenses()
            .then(expenses =>{
                if(expenses.length === 0){
                    res.status(204).end();
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
    },

    async deleteExpense(req, res){

        const expenseId = req.params.id; 
        
        try {
            const result = await ExpenseService.deleteExpense(expenseId);
        
            if (result.acknowledged) {
                if (result.deletedCount === 1) {
                    return res.status(200).json({ success: true, message: 'Expense deleted successfully' });
                } else {
                    return res.status(404).json({ success: false, message: 'No expense found with the given ID' });
                }
            } else {
                return res.status(500).json({ success: false, message: 'Delete operation was not acknowledged by the server' });
            }

        } catch (error) {
            return res.status(500).json({ success: false, message: 'An internal error occurred' });
        }
    },

    async updateExpense(req, res){
        const expenseId = req.params.id;
        const newValue = req.body;
        
        const expenseSchemaPaths = Expense.schema.paths;
        const allowedProperties = new Set(Object.keys(expenseSchemaPaths));
      

        for (const key in newValue) {
            if (!allowedProperties.has(key)) {
                return res.status(400).json({
                    message: `Invalid property: ${key}`
                });
            }

            if(key === 'status'){
                const allowedStatusValues = Expense.schema.path('status').enumValues;
          
                if(!allowedStatusValues.includes(newValue[key])){
                    return res.status(400).json({
                        message : `Invalid value for property 'status' : ${newValue[key]}`
                    })
                }
            }
        }  

        try {
            const result = await ExpenseService.updateExpense(expenseId , newValue)
            
            if(result){
                return res.status(200).json({message : "Expense updated"})
            }else{
                return res.status(404).json({ message: "Expense not found" })
            }
        } catch (error) {
            return res.status(500).json({success : false, message: "An internal error occured"})            
        }
    }

    
}

module.exports = ExpenseControllers
