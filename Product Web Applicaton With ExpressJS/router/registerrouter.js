const express = require('express');
const myregisterrouter = express.Router();

const registerController = require("../controller/registerController");

myregisterrouter.get("/", registerController.getRegisterForm);
myregisterrouter.post("/adduser", registerController.addUser);

module.exports = myregisterrouter;