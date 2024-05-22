const UserDao = require("../dao/UserDao")

const UserService = {

    async getAllUsers(){
        return await UserDao.getAllUsers();
    },

    async createUser(userData){
        return await UserDao.createUser(userData)
    }
}

module.exports = UserService