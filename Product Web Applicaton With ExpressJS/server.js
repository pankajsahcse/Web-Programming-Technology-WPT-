//import all libraries
const express = require('express');
const app = express();
const path = require("path");
const session = require("express-session")
const bodyParser = require("body-parser")

// Static files (CSS, JS, Images)
app.use(express.static("public"));

const loginrouter = require("./router/loginrouter")
const productrouter = require("./router/productrouter")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

// Form data parsing middleware
app.use(express.urlencoded({ extended: true }));

// JSON data parsing middleware
app.use(express.json());

app.use(
    session({
        secret: "mysecretkey",
        resave: false,
        saveUninitialized: false
    })
)

// Default route
app.get("/", (req, res) => {
    res.redirect("/login");
});

//url handler moddleware
app.use("/login",loginrouter)
app.use("/product",productrouter)

//start the server

app.listen(3131,()=>{
    console.log("server runing on port 3131")
})
