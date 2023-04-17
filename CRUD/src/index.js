const express = require("express");
const connect = require("./configs/db")
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");


const app = express();

app.use(express.json());

app.use("/users",userController)
app.use("/product",productController);


app.listen(1234,async(res,rec)=>{
    await connect();
    console.log("Listening on port 1234")
})