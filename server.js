const express=require("express");
const dotenv=require("dotenv");
const morgan=require('morgan');
const bodyparser=require("body-parser");
const path=require('path');
const connectDB=require('./server/database/connection');
// const mongoose=require('mongoose')

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');
//   console.log("database connected");
  
//   // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }
//morgan is used for  logging requests

//dotenv is used for config system variables


const app=express();

dotenv.config({path:'config.env'});
const port=process.env.PORT||8080
app.use(morgan('tiny'));
connectDB();
//parse the body
app.use(bodyparser.urlencoded({extended:true}));
// set view engine

app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,'views/ejs'));
//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//if you want to go inside the css folder and access the css file then upar niche wala comment likh dena

//css/style.css

//load the routers

app.use('/',require('./server/routes/router'));
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
});