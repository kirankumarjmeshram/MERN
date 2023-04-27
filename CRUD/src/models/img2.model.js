const mongoose = require("mongoose");

const img2Schema = mongoose.Schema({
    name :{type:String,required:true},
    image : {
        data : Buffer,
        contentType : String
    }
},{
    versionKey:false,
    required:true,
});

module.exports = mongoose.model("img2s",img2Schema)