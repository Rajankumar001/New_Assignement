const express=require('express');
const bodyParser = require('body-parser');
const dotenv=require('dotenv');
const cors = require('cors');
const taskRoutes = require('./routes/Taskroutes');
dotenv.config();
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const mongoose=require('../server/db/config');
app.use('/api', taskRoutes);
const PORT=5000;


app.get("/",(req,res)=>{
    res.send("hi i am server");
})
app.listen(PORT,()=>{
    console.log("app is listening on port 8080");
})