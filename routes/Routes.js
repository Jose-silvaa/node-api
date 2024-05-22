const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/UserControllers");


// Route to list all users
router.get("/users", UserControllers.getAllUsers);

//Route to create a new user
router.post("/newUser", UserControllers.createUser);

module.exports = router;