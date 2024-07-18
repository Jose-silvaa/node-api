const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');


const hashPassword = async(req, res)=>{

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt); 

        return hashedPassword;
    } catch (error) {
        res.status(500).send();
    }
}


function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}


module.exports = {hashPassword , authenticateToken};
