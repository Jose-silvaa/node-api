//Controller to handle user-related operations

const UserService = require("../services/UserService");


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

    createUser(req, res){

        if(!req.body.email || !req.body.name){
            return res.status(400).json({error : "Email and password are required"})
        }

        UserService.createUser(req.body)
            .then(newUser =>{
                res.status(201).json(newUser)
            })
            .catch(error => {

                const errorResponses = {
                    'USER_EXISTS' : { status : 409, message : "User already exists."},
                    'VALIDATION_ERROR' : { status : 422, message : "Validation error.", details : error.details}
                }
                
                const response = errorResponses[error.code] || { status: 500, message: "Error creating user." };

                res.status(response.status).json({ error: response.message, ...(response.details && {details: response.details})});
            })
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