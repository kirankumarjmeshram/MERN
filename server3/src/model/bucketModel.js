const mongoose = require('mongoose')

const bucketSchema = mongoose.Schema({
    filename:String,
    contentType:String,   
chunkSize:Number,

});

  const Bucket = mongoose.model('newBucket.files',bucketSchema);

  module.exports =Bucket