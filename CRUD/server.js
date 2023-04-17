const express = require("express");
const connect = require("./src/configs/db")
const userController = require("./src/controllers/user.controller");
const productController = require("./src/controllers/product.controller");


const app = express();

app.use(express.json());

app.use("/users",userController)
app.use("/product",productController);


app.listen(1234,async(res,rec)=>{
    await connect();
    console.log("Listening on port 1234")
})