const { render } = require("ejs");
const myconnection = require("../databaseconfig/dbconnection");
const { json } = require("body-parser");


//find all products and display in table form  by sending data to showproduct.ejs
//in showproduct.ejs, data is accessed by using arry by name productdata

exports.getAllProducts = (req, resp) => {
    myconnection.query("select * from product", (err, result, field) => {
        if (err) {
            resp.status(404).send("error occured" + JSON.stringify(err))
        } else {
            // console.log(result);       
            resp.render("showproduct", { productdata: result })
        }
    })
}

exports.showproductform = (req, resp) => {
    resp.render("addproduct");
}

exports.insertproduct = (req, resp) => {
    const { pid, pname, qty, price, mfgdate } = req.body
    myconnection.query("INSERT INTO PRODUCT VALUES(?,?,?,?,?)", [pid, pname, qty, price, mfgdate], (err, result, field) => {
        if (err) {
            resp.status(500).send("data not inserted" + JSON.stringify(err));
        } else {
            console.log("data added" + result)
            resp.redirect("/product/getproducts")
        }
    })
}

exports.editproduct = (req, resp) => {
    var id = req.params.pid;
    myconnection.query("SELECT * FROM PRODUCT WHERE PID = ? ", [id], (err, result, field) => {
        resp.render("editProduct", { product: result[0] })
    })
}

exports.updateproduct = (req, resp) => {
    const { pid, pname, qty, price, mfgdate } = req.body;

    myconnection.query("UPDATE PRODUCT SET PNAME =?, QTY =?, PRICE =?, MFGDATE =? WHERE PID =?",
        [pname, qty, price, mfgdate, pid], (err, result, field) => {
            if (err) {
                resp.status(500).send("data not updated" + JSON.stringify(err));
            } else {
                console.log("data added" + result)
                resp.redirect("/product/getproducts")
            }
        }
    )
}

exports.deleteproduct = (req,resp) =>{
    var id = req.params.pid;

    myconnection.query("DELETE FROM PRODUCT WHERE PID = ?" ,[id], (err,result,field) =>{
        if(err){
            resp.status(500).send(JSON.stringify(err))
        }else{
             resp.redirect("/product/getProducts")
        }
    })

}