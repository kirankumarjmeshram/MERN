const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const mongouri = 'mongodb://127.0.0.1:27017/crudAppData';
  

var bucket;
const connect=mongoose.connection.on("connected", () => {
//   let client = mongoose.connections[0].client;
  let db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket"
  });
//   console.log(bucket);
});

app.use(express.json());

app.use(express.urlencoded({
  extended: false
}));


const storage = new GridFsStorage({
    url: mongouri,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "newBucket"
        };
        resolve(fileInfo);
      });
    }
  });

const upload = multer({
    storage
});
//get 

app.get("/fileinfo/:filename",async (req, res) => {
//   const filename=req.params.filename
   const file= await connect.collection("newBucket.files").findOne({filename:req.params.filename})
    // const file = await bucket
    //   .find({
    //     filename: req.params.filename
    //   }).po

   res.send(file);
    //   .toArray((err, files) => {
    //     if (!files || files.length === 0) {
    //       return res.status(404)
    //         .json({
    //           err: "no files exist"
    //         });
    //     }
    //     bucket.openDownloadStreamByName(req.params.filename)
    //       .pipe(res);
    //   });
  });
// app.get("/fileinfo", (req, res) => {
//     try {
//         const image = bucket.find();
//         res.status(201).send(image);
//     } catch (err) {
//         res.send(500).json({message: err.message,status:"Failed"});
//     }
// })




// post
app.post("/upload", upload.single("img"), (req, res) => {
    res.status(200)
      .send("File uploaded successfully");
});




app.listen(3010, async () => {
    await mongoose.connect(mongouri)
  console.log(`Server3 Application live on localhost:3010`);
});