const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema(
    {
        price : {
            type : Number, 
            require : true
        },

        description : {
            type : String, 
        }, 

        category : {
            type : String ,
            require : true
        },

        createAt : {
            type : Date,
            default : Date.now
        },

        status : {
            type : String, 
            enum : ["Paid", "Unpaid", "Will Pay Next Month"],
            default : "Unpaid"
        }
    }
)

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;