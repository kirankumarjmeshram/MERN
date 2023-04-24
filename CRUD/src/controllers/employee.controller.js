const express = require("express");

const Employee = require("../models/employee.model");

const {uploadSingle,uploadMultiple} = require("../middlewares/upload");

const fs = require("fs");

const router = express.Router();

router.post("", uploadSingle("pic"),async (req,res)=>{
    try{
        const employee = await Employee.create(req.body);
        return res.status(201).send(employee);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

router.get("",async (req,res)=>{``
    try{
        employee = await Employee.find().lean().exec() ;
        return res.status(201).send(employee)
        
    }catch(err){
        return res.status(500).send(err.message);
    }
})



router.patch("/:id",async (req,res)=>{
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(employee)
        
    }catch(err){
        return res.status(500).json({message: err.message,status:"Failed"});
    }

})

router.delete("/:id", async (req,res)=>{

    try{
        const employee=await Employee.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(employee)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});




module.exports = router;
