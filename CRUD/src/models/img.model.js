const mongoose = require("mongoose");

const ImgSchema = mongoose.Schema({
    name:{type:String, required:false},
    myFile:{type:String, required: true}
},{
  
    timestamp:true,
    
})

module.exports = mongoose.model("imgs",ImgSchema);