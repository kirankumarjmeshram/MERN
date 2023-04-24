const express = require("express");

const User = require("../models/user.model")

const router = express.Router();

router.post("",async (req,res)=>{
    try{
        const user = await User.create(req.body);
        return res.status(201).send(user);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

router.get("",async (req,res)=>{``
    try{
     
        user = await User.find().lean().exec() ;
        return res.status(201).send(user)
        
    }catch(err){
        return res.status(500).send(err.message);
    }
})

router.get("/hello",async (req,res)=>{``
    try{
     
        //user = await User.find().lean().exec() ;
        return res.status(201).send(hello())
        
    }catch(err){
        return res.status(500).send(err.message);
    }
})


router.patch("/:id",async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(user)
        
    }catch(err){
        return res.status(500).json({message: err.message,status:"Failed"});
    }

})

router.delete("/:id", async (req,res)=>{

    try{
        const user=await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(user)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});




module.exports = router;
