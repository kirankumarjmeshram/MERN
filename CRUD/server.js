const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./src/configs/db")
const userController = require("./src/controllers/user.controller");
const productController = require("./src/controllers/product.controller");
const employeeController = require("./src/controllers/employee.controller");
const imageController = require("./src/controllers/image.controller");
const imgController = require("./src/controllers/img.controller");
const img2Controller = require("./src/controllers/img2.controller");

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded(
    { extended:true }
))



app.use("/users",userController)
app.use("/product",productController)
app.use("/employees", employeeController)
app.use("/image", imageController)
app.use("/img",imgController)
app.use("/img2",img2Controller)


app.listen(1234,async(req,res)=>{
    await connect();
    console.log("Listening on port 1234")
})