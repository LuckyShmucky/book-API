
const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
title: {type: String, require: true},
imageURL: {type: String},
description: {type: String},
year: {type: Number},
quantity: {type: Number}

}, {toJson: {virtuals: true}})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book