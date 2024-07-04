const mongoose=require('mongoose')

const urlSchema = new mongoose.Schema({
    originalUrl: {type:String,required:true},
    hash: {type:String},
    createdAt: { type: Date, default: Date.now},
  });
  
const Url = mongoose.model('Url', urlSchema);


module.exports=Url