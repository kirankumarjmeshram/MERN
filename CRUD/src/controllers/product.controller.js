const express = require("express");

const router = express.Router();

const Product = require("../models/product.model")

router.post("", async (req,res)=>{
  try{
    const product = await Product.create(req.body);
    return res.status(200).send(product)
    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message,status:"Failed"})
    }
})


router.get("/pagi/:page", async (req,res)=>{
    console.log('url hit')
     try{
        const page= +req.params.page || 1;//default value 1
        const size = +req.query.size ||2;//default value 5
        //const search = req.query.search;

        const skip = (page -1)*size;
        let products,totalPages;
        //if(!search){
            products = await Product.find().skip(skip).limit(size).lean().exec();
            totalPages = Math.ceil((await Product.find().countDocuments())/size);
        //}else{
            //products = await Product.find({name:search}).skip(skip).limit(size).lean().exac() ;
            //totalPages = Math.ceil((await Product.find().countDocuments())/size);
        //}
    return res.status(201).send({products, totalPages});
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});

router.get("", async (req,res)=>{

    try{
        const products = await Product.find().lean().exec();
    return res.status(201).send(products)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});


router.patch("/:id", async (req,res)=>{

    try{
        const product= await Product.findByIdAndUpdate(req.params.id).lean().exec();
    return res.status(201).send(product)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});

router.delete("/:id", async (req,res)=>{

    try{
        const product=await Product.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(product)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
});

 

module.exports=router;