require('dotenv').config();

const jwt = require('jsonwebtoken');

const sendJwtToken = (user, res) => {
    try {
        const plainUser = {
            ...user,
            _id: user._id.toString(),
        };

        if (typeof plainUser !== 'object' || plainUser === null || Array.isArray(plainUser)) {
            throw new Error('Invalid user object');
        }

        // Assinando o token com 
        const accessToken = jwt.sign(plainUser, process.env.ACCESS_TOKEN_SECRET);

        
        return res.json({ accessToken: accessToken });
    } catch (error) {
        // Tratando possíveis erros
        console.error("Erro ao gerar o token JWT:", error.message);
        return res.status(500).json({ error: 'Erro ao gerar o token JWT' });
    }
};

module.exports = sendJwtToken;