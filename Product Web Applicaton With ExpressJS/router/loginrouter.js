const express = require("express");
const myloginrouter = express.Router();

const loginController = require("../controller/loginController");
const registerController = require("../controller/registerController")

myloginrouter.get("/", loginController.getLoginForm);

myloginrouter.post("/validateuser", loginController.validateuserdetails)

// This route is for register when user login page redirect the register form
myloginrouter.get("/register", registerController.getRegisterForm )

module.exports = myloginrouter

