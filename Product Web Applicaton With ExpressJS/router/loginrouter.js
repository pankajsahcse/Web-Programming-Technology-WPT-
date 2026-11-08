const express = require("express");
const myloginrouter = express.Router();

const loginController = require("../controller/loginController");

myloginrouter.get("/", loginController.getLoginForm);

myloginrouter.post("/validateuser", loginController.validateuserdetails)

module.exports = myloginrouter

