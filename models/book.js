
const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
title: {type: String, require: true},
image: {type: String},
description: {type: String, required: true},
year: {type: Number},
quantity: {type: Number}

})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book