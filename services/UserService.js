const UserDao = require("../dao/UserDao")

const UserService = {

    async getAllUsers(){
        return await UserDao.getAllUsers();
    },

    async getUserByEmail(email){
        return await UserDao.getUserByEmail(email)
    }, 

    async getUserByUsername(username){
        return await UserDao.getUserByUsername(username)
    },

    async createUser(userData){
        return await UserDao.createUser(userData);
    },

    async deleteUser(_id){
        return await UserDao.deleteUser({_id: _id});
    },

    async updateUser(userId, newValue){

        const filter = { _id: userId };
        const update = { $set: newValue };

        try {
            return await UserDao.updateUser(filter, update)
        } catch (error) {
            console.log('An error ocorred while updating the user', error.message)
        }
      
    }
}

module.exports = UserService