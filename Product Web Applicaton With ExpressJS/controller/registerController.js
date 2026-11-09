const myconnection = require('../databaseconfig/dbconnection')

exports.getRegisterForm = (req, resp) => {
    resp.render("register")
};

exports.addUser = (req, resp) => {
    var { uname, password } = req.body;

    myconnection.query("INSERT INTO USERLOGIN VALUES(?,?,'user')", [uname, password],
        (err, result) => {
            if (err) {
                // console.log(err);
                req.session.message = "Registration Failed! Username may already exist.";
                req.session.messageType = "error";

                return resp.redirect("/login");
            } else {
                req.session.message = "Registration Successful! You can now login.";
                req.session.messageType = "success";

                resp.redirect("/login");
            }
        })
}