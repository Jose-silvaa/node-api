const User = require("../models/User")

const UserDao = {

    async getAllUsers(){
        return await User.find();
    },

    async createUser(userData){
        return await User.create(userData);
    },

    async deleteUser(id){
        return await User.deleteOne(id)
    },

    async updateUser(filter, update){
        return await User.findOneAndUpdate(filter, update, {
            new : true
        })
    }
}

module.exports = UserDao;