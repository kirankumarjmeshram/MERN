const mongoose = require("mongoose");

const ImgSchema = mongoose.Schema({
    name:{type:String, required: true}
})

module.exports = mongoose.model("imgs",ImgSchema);