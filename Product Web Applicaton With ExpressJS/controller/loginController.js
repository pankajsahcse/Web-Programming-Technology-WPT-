const myconnection = require("../databaseconfig/dbconnection");

exports.getLoginForm = (req, resp) => {
  resp.render("login");
};

exports.validateuserdetails = (req, resp) => {
  //var uname=req.body.uname;
  //var password=req.body.password
  var { uname, password } = req.body;
  console.log(uname + "," + password);
  myconnection.query(
    "select * from userlogin where username=?",
    [uname],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //result is a array,username not found
        if (result.length == 0) {
          resp.render("login", {
            message: "Invalid username or Password!",
          });
        } else {
          console.log("Result");
          console.log(result);
          var user = result[0];
          console.log("user");
          console.log(user);
          //check password
          if (user.password === password) {
            //resp.send("<h1>Valid user</h1>")
            //save user object in session
            req.session.user = user;
            resp.redirect("/product/getproducts");
          } else {
            resp.render("login", {
              message: "Invalid username or Password!",
            });
          }
        }
      }
    },
  );
};
