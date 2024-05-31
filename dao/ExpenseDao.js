const Expense = require("../models/Expense")


const createExpense = async(expenseData)=>{
    return await Expense.create(expenseData);
}

const updateExpense = async(filter, update)=>{
    return await Expense.findOneAndUpdate(filter, update, {
        new : true
    });
}

const getAllExpenses = async()=>{
    return await Expense.find();
}

const deleteExpense = async(_id)=>{
    return await Expense.deleteOne({_id: _id});
}

module.exports = {deleteExpense, getAllExpenses, updateExpense, createExpense}