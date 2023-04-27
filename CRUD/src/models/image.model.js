const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    // name:{type:String, required:false},
    img :[{type:String,required:true}],
},{
    versionKey:false,
    required:true,
});

module.exports = mongoose.model("gallery",imageSchema)