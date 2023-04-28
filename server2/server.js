const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./src/configs/db")
const imageController = require("./src/controllers/image.controller");


const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded(
    { extended:true }
))

app.use("/image", imageController)


app.listen(3456,async(req,res)=>{
    await connect();
    console.log("Listening on port 3456")
})