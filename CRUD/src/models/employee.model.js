const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    first_name:{type: String,required:true},
    last_name:{type: String,required:true},
    img:[{type:String, require:false}],
    email:{type: String,required:true},
    role:{type: String,required:true},
    payment:{type: Number,required:false},
    address:{type: String,required:false},
    pin_code:{type: Number,required:false},
   
},{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("employee",employeeSchema);