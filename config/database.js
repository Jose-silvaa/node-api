const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async ()=>{

    return mongoose.connect(process.env.CONNECT_MONGODB)
    
    .then(()=>{
        console.log("Connected to database");
    })
    .catch(()=>{
        console.err("Could not connect to MongoDB", err);
        process.exit(1);
    })
}

module.exports = connectDB;