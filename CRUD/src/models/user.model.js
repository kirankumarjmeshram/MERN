const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{type: String,required:true},
    last_name:{type: String,required:true},
    email:{type: String,required:true},
    password:{type: String,required:true},
    address:{type: String,required:false},
    pin_code:{type: Number,required:false},
    cart_product:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:false,
    }]
},{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("user",userSchema);