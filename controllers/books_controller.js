const { Router } = require('express')
const express = require('express')
const booksRouter = express.Router()
// const Book = 
const Book = require('../models/book.js')


booksRouter.get('/', async(req, res) =>{
  try{  const books = await Book.find()
    res.status(200).json(books)
    console.log('found the books')
  } catch (error){
    res.status(400)
     console.log(error)
  }
})

booksRouter.get('/:id', async(req, res) =>{
    const foundBooks = await Book.findById(req.params.id)
  try {
    res.status(200).json(foundBooks)
  } catch (error){
    res.status(400)
    console.log(error)
  }
  })

booksRouter.post('/', async(req, res)=> {
  const newBook = await Book.create(req.body)
  console.log(req.body)
  try {
    res.status(200).json(newBook)
  } catch (error){
    res.status(400)
    console.log(error)
  }
})

booksRouter.put('/:id', async(req, res)=>{
 const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
 console.log(req.body)
 try{
   res.status(200).json(updatedBook)
 } catch (error){
   res.status(400)
   console.log(error)
 }
})

booksRouter.delete('/:id', async(req, res)=>{
//  const deletedBook = Book.findByIdAndDelete(req.params.id)
try{
  console.log( await Book.findByIdAndDelete(req.params.id))
  await Book.findByIdAndDelete(req.params.id)
  
} catch (error){
  res.status(400)
  console.log(error)
}
})

module.exports = booksRouter