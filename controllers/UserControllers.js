//Controller to handle user-related operations


const UserService = require("../services/UserService");


const UserControllers = {

    getAllUsers(req, res){
        UserService.getAllUsers()
            .then(users => {
                res.json(users)
            })
            .catch(error =>{
                res.status(500).json({error : "Error searching for users."})
            })
    },

    createUser(req, res){
        UserService.createUser(req.body)
            .then(newUser =>{
                res.status(201).json(newUser)
            })
            .catch(error => {
                res.status(500).json({error : "Error creating user."})
            })
    }

};


module.exports = UserControllers