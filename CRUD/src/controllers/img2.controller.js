const express = require("express");
const router = express.Router();
const multer = require('multer');
const Img2 = require("../models/img2.model");
const fs = require('fs');

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },  
    filename : (req, file, cb) =>{
        cb(null, file.fieldname + '-' + Date.now());
    } 
});

const upload = multer({
    storage : Storage
})

router.get('/',async (req,res)=>{
    const allData = await Img2.find()
    res.json(allData)
  })
  
router.post("/", upload.single("testImage"),async (req, res) => {
    const img = new Img2({
        name: req.body.name,
        image: {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/png",
        },
      });
       await img
        .save()
        .then((res) => {
          console.log("image is saved");
        })
        .catch((err) => {
          console.log(err, "error has occur");
        });
        res.send('image is saved')
    })

module.exports = router;
