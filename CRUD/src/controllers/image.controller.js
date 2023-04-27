const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

const Image = require("../models/image.model");

const {uploadSingle,uploadMultiple} = require("../middlewares/upload");

const fs = require("fs");


router.post("/single", uploadSingle("img"), async (req,res)=>{
    try{
        console.log("querry hit")
        const image = await Image.create({
            pictures:req.file.path,
            
            user_id:req.body.user_id
        });
        return res.status(200).send(image)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
   
})


router.post("/multiple",uploadMultiple("pictures",5),async (req, res) => {
    try {
        const filePaths = req.files.map((file) => file.path);
    
        const image = await Image.create({
          pictures: filePaths,
          user_id:rec.body.user_id,

        });
    
        return res.send({image});
      } catch (err) {
        return res.status(500).send(err);
      }
})

router.get('',async (req, res) => {
    try {
        const image = await Image.find().lean().exec();
        res.status(201).send(image);
    } catch (err) {
        res.send(500).json({message: err.message,status:"Failed"});
    }
})



router.delete("/:id",async (req, res) => {
    try {
        const image=await Image.findByIdAndDelete(req.params.id).lean().exec();
        res.send(image);
        for(let i=0; i<image.pictures.length; i++) {
            fs.unlinkSync(image.pictures[i]);
        }
    } catch (err) {
        res.send(500).json({message: err.message,status:"Failed"});
    }
})
module.exports =router;
