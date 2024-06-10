//Controller to handle user-related operations

const { getUserByEmail, getUserByUsername } = require("../dao/UserDao");
const UserService = require("../services/UserService");
const Bcrypt = require('bcrypt')

const UserControllers = {

    getAllUsers(req, res){
        UserService.getAllUsers()
            .then(users => {
                if(users.length === 0){
                    res.status(204).send();
                }else{
                    res.status(200).json(users);
                }
            })
            .catch(error =>{
                res.status(500).json({error : "Error searching for users."})
            })
    },

    getUserByUsername(req, res){
        const username = req.params.username;

        if(!username){
            return res.status(404).json({message : "Username is required"});
        }

        UserService.getUserByUsername(username)
            .then(user =>{
                if(user){
                    return res.status(200).json(user);
                }

                return res.status(404).json({message : "User not found"})
            })
            .catch(err =>{
                return res.status(500).json({message : "Error while fetching user"})
            })

    },

    getUserByEmail(req, res){
        const email = req.params.email;

        if(!email){
            return res.status(404).json({message : "Email is required"})
        }

        UserService.getUserByEmail(email)
            .then(user => {
                if(user){
                    return res.status(200).json(user)
                }
                return res.status(404).json({ message: 'User not found' });
            })
            .catch(err => {
                return res.status(500).json({message : "Error while fetching user"})
            })
    },

    async createUser(req, res){

        const user = { username : req.body.username, email : req.body.email,  password : req.body.password}

        for(const key in user){
            if(!user[key]){
                return res.status(400).json({error : `${key.charAt(0).toUpperCase() + key.slice(1)} is required`})
            }
        }

        const repeatedProperties = { email : await getUserByEmail(user.email), username : await getUserByUsername(user.username)}
       

        for(const key in repeatedProperties){
            let result = await repeatedProperties[key];
            
            if(result){
                return res.status(409).json({error : `${key.charAt(0).toUpperCase() + key.slice(1)} already registered previously`})  
            }else{
                UserService.createUser(req.body)
                .then(newUser =>{
                    return res.status(201).json(newUser)
                })
                .catch(error => {
                    return res.status(404).json({message: "Error while creating user"})//Mistake here
                })
            }
        }
        
    },

    async deleteUser(req, res){

        const userId = req.params.id;
        
        if(!userId){
            return res.status(404).json({success: false, message : "User ID is required"})
        }

        try {
            const result = await UserService.deleteUser(userId);

            if(result.acknowledged){
                return res.status(200).json({message: "User delete successfully"})
            }else{
                return res.status(404).json(result)
            }

        } catch (error) {
            return res.status(500).json({success: false, message: 'An internal error occurred'})
        }
    },

    async updateUser(req, res){
        const userId = req.params.id;

        const newValue = req.body

        if(!userId || !newValue){
            return res.status(404).json({message : "User ID and body is required"})
        }

        try {
            const result = await UserService.updateUser(userId, newValue)

            if(result.id == userId){
                return res.status(200).json({message: "User Update"})
            }else{
                return res.status(404).json(result)
            }
        } catch (error) {
            return res.status(500).json({success: false, message: "An internal error occured"})
        }
    }

};


module.exports = UserControllers