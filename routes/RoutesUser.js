const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/UserControllers");


// Route to list all users
router.get("/users", UserControllers.getAllUsers);

//Route to create a new user
router.post("/newUser", UserControllers.createUser);

//Route to delete a user
router.delete("/delete/:id", UserControllers.deleteUser);

//Route to update a user
router.put("/update/:id", UserControllers.updateUser)

module.exports = router;