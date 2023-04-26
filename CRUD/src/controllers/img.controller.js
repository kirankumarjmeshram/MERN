const express = require("express");

const router = express.Router();

const Img = require("../models/img.model")


router.get('/', (req, res) => {
  try{
      Img.find({}).then(data => {
          res.json(data)
      }).catch(error => {
          res.status(408).json({ error })
      })
  }catch(error){
      res.json({error})
  }
})


router.post("/", async (req, res) => {
  const body = req.body;
  try{
      const newImage = await Img.create(body)
      newImage.save();
      res.status(201).json({ msg : "New image uploaded!"})
  }catch(error){
      res.status(409).json({ message : error.message })
  }
})

module.exports = router;