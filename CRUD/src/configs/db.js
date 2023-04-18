
const dotenv = require("dotenv");
dotenv.config();
const PASS = process.env.PASS;
const mongoose = require("mongoose");
module.exports =()=>{
    //mongoose.connect('mongodb://127.0.0.1:27017/crudAppData');

    try{
        mongoose.connect(`mongodb+srv://kirankumar21895:${PASS}@projects.hr7o8em.mongodb.net/test?retryWrites=true`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
 }
    