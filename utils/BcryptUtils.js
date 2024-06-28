const bcrypt = require('bcrypt')


const hashPassword = async(req, res)=>{

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt); 

        return hashedPassword;
    } catch (error) {
        res.status(500).send();
    }
}


module.exports = hashPassword;
