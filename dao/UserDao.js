const User = require("../models/User")

const UserDao = {

    async getAllUsers(){
        return await User.find();
    },

    async createUser(userData){
        return await User.create(userData);
    }
}

module.exports = UserDao;