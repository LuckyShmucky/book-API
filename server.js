const mongoose = require('mongoose')
require('dotenv').config()
const express = require('express')
const app = express()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    function(){ console.log('connected to mongo')})

app.use(express.urlencoded({extended: true}))

app.get('/', async(req, res)=>{
 res.send("Welcome to the book api!")
})

