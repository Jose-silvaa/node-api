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
    },

    async deleteExpense(req, res){

        const expenseId = req.params.id; 

        if(!expenseId){
            return res.status(404).json({sucess: false, message: "Expense ID is required"})
        }
       
        try {
            const result = await ExpenseService.deleteExpense(expenseId)

            if(result.acknowledged){
              
                return res.status(200).json({message: 'Expense deleted successfully'});
            }else{
                return res.status(404).json(result)
            }

          
        } catch (error) {
            return res.status(500).json({ success: false, message: 'An internal error occurred'});
        }
    },

    async updateExpense(req, res){
        const expenseId = req.params.id;

        const newValue = req.body
        
        if(!expenseId || !newValue){
            return res.status(404).json({message : "Expense ID and body is required"})
        }

        try {
            const result = await ExpenseService.updateExpense(expenseId , newValue)
            
            if(result._id == expenseId){
                return res.status(200).json({message : "Expense updated"})
            }else{
                return res.status(404).json(result)
            }
        } catch (error) {
            return res.status(500).json({success : false, message: "An internal error occured"})            
        }
    }

    
}

module.exports = ExpenseControllers
