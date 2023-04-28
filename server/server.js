const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./src/configs/db")
const employeeController = require("./src/controllers/employee.controller");
const imageController = require("./src/controllers/image.controller");


const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded(
    { extended:true }
))


app.use("/employees", employeeController)
app.use("/image", imageController)


app.listen(2345,async(req,res)=>{
    await connect();
    console.log("Listening on port 2345")
})