const express = require("express");
const multer = require("multer");
const fs = require("fs");
const ImgModel = require("../models/img.model")
const router = express.Router();
const {uploadSingle,uploadMultiple} = require("../middlewares/upload");
//const abc = require("../uploads")
const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads");
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now()+"-"+file.originalname);
//     },
//   });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if(isValid) {
            uploadError = null
        }
      cb(uploadError, '../uploads')
    },
    filename: function (req, file, cb) {
        
      const fileName = file.originalname.split(' ').join('-');
      const extension = FILE_TYPE_MAP[file.mimetype];
      cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
  })

  //CRUD\src\uploads
  const upload = multer({ storage: storage });
     
  router.post("/", upload.single('image'),async (req, res) => {
    const imgModel = await ImgModel({
      name: req.body.name,
      img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });
    imgModel
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('image is saved')
  });
  
  
//   router.get('/',async (req,res)=>{
//     const allData = await ImgModel.find()
//     res.json(allData);
//     //res.send("Hello World")
//   })

// router.post(`/`, upload.single('image'), async (req, res) =>{
//     const category = await Category.findById(req.body.category);
//     if(!category) return res.status(400).send('Invalid Category')

//     const file = req.file;
//     if(!file) return res.status(400).send('No image in the request')

//     const fileName = file.filename
//     const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
//     let product = new Product({
//         name: req.body.name,
//         description: req.body.description,
//         richDescription: req.body.richDescription,
//         image: `${basePath}${fileName}`,// "http://localhost:3000/public/upload/image-2323232"
//         brand: req.body.brand,
//         price: req.body.price,
//         category: req.body.category,
//         countInStock: req.body.countInStock,
//         rating: req.body.rating,
//         numReviews: req.body.numReviews,
//         isFeatured: req.body.isFeatured,
//     })

//     product = await product.save();

//     if(!product) 
//     return res.status(500).send('The product cannot be created')

//     res.send(product);
// })





  router.get('',async (req, res) => {
    try {
        const image = await ImgModel.find().lean().exec();
        res.status(201).send(image);
    } catch (err) {
        res.status(500).send().json({message:err.message,status:"Failed"})
    }
})

  module.exports = router;