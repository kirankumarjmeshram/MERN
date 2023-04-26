const express = require("express");
const connect = require("./src/configs/db")
const userController = require("./src/controllers/user.controller");
const productController = require("./src/controllers/product.controller");
const employeeController = require("./src/controllers/employee.controller");
const imageController = require("./src/controllers/image.controller");
const imgController = require("./src/controllers/img.controller");

const app = express();

app.use(express.json());


app.use("/users",userController)
app.use("/product",productController)
app.use("/employees", employeeController)
app.use("/image", imageController)
app.use("/img",imgController)


app.listen(1234,async(req,res)=>{
    await connect();
    console.log("Listening on port 1234")
})