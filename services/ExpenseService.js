const ExpenseDao = require("../dao/ExpenseDao");

const ExpenseService = {
    
    async getAllExpenses(){
        try {
            return await ExpenseDao.getAllExpenses();      
        } catch (error) {
            console.error('An error occurred while getting all expenses:', error.message);   
        }
    },

    async createExpense(expenseData){
        try {
            return await ExpenseDao.createExpense(expenseData);    
        } catch (error) {
            console.error('An error ocorred while creating the expense', error.message)
        }
    },

    async deleteExpense(_id){
        try {
            return await ExpenseDao.deleteExpense({_id: _id})     
        } catch (error) {
            console.error('An error ocorred while deleting the expense', error.message)
        }
    },

    async updateExpense(filter, update){
        try {
            return await ExpenseDao.updateExpense({filter, update})      
        } catch (error) {
            console.log('An error ocorred while updating the expense', error.message)
        }
      
    }
}


module.exports = ExpenseService;