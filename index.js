//Dependencies
const express = require('express')
const mongoose = require('mongoose')
//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    function(){ console.log('connected to mongo')})

app.use(express.urlencoded({extended: true}))

//this must be included for our server to be configured to use JSON
//or else we won't get error messages but our data also will not be handled
//by the server correctly 
app.use(express.json())
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)
app.get('/', async(req, res)=>{
 res.send("Welcome to the book api!")
})

app.get('/books', async(req,res)=>{
    res.json()
})

app.listen(PORT, ()=>{
    console.log(`Running on Port: ${PORT}`)
})