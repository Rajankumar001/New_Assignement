const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(`${process.env.Mongo_url}`)
 .then( function(){
   return console.log("connection successfull .......")
 }).catch( function(err){
    console.log("error caught ..........")
 })
 module.exports=mongoose;
