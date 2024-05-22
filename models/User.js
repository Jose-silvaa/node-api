const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, "Please enter your name"]
        },

        email : {
            type : String, 
            required : [true, "Please enter your email"]
        },

        createdAt : {
            type : Date,
            default : Date.now
        }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;