const { Router } = require('express')
const express = require('express')
const booksRouter = express.Router()
// const Book = 
const Book = require('../models/book.js')


booksRouter.get('/', async(req, res) =>{
  try{  const books = await Book.find()
    res.json(books)
    console.log('found the books')
  } catch (error){
      console.log(error)
  }
})

booksRouter.get('/:name', async(req, res) =>{
    const founndBooks = await Book.findOne({})
})

module.exports = booksRouter