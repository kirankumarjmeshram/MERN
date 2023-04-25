const mongoose = require("mongoose");

const ImgSchema = mongoose.Schema({
    name:{type:String, required: true},
    image:{
        data : Buffer,
        contentType : String
    }
})

module.exports = mongoose.model("imgs",ImgSchema);