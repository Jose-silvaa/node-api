const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/UserControllers");


// Route to list all users
router.get("/users", UserControllers.getAllUsers);

//Router to get user by username
router.get("/user/:username", UserControllers.getUserByUsername)

//Route to get user by email
router.get("/user/:email", UserControllers.getUserByEmail)

//Route Login
router.post("/user/login", UserControllers.login)

//Route to create a new user
router.post("/newUser", UserControllers.createUser);

//Route to delete a user
router.delete("/delete/:id", UserControllers.deleteUser);

//Route to update a user
router.put("/update/:id", UserControllers.updateUser)

module.exports = router;