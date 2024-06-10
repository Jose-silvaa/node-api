const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : [true, "The username field is required."],
        },

        email : {
            type : String, 
            required : [true, "The email field is required."],
        },

        password :{
            type : String, 
            required : [true, "The password field is required."],
            min : [6, 'The password is too short.']
        },

        createdAt : {
            type : Date,
            default : Date.now
        }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;