const express=require("express")
const myproductrouter=express.Router();

const productController = require("../controller/productController");


myproductrouter.get("/getproducts",productController.getAllProducts);

myproductrouter.get("/addproduct", productController.showproductform);
myproductrouter.post("/insertproduct", productController.insertproduct);

myproductrouter.get("/editproduct/:pid",productController.editproduct);
myproductrouter.post("/updateproduct",productController.updateproduct);

myproductrouter.get("/deleteproduct/:pid", productController.deleteproduct);



module.exports=myproductrouter

