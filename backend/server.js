const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


const app = express();


//middlewares





//routes

app.get('/', (req,res)=>{

res.send('Home Page')

})





const PORT = process.env.PORT || 5000


//server

mongoose.connect(process.env.MONGO_URI).then(()=>{


app.listen(PORT , ()=>{

console.log("server is live on port 5000")


})



})