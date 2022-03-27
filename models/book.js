require('dotenv').config()
const mongoose = require('mongoose')
const { Schema } = mongoose

const boookSchema = new Schema({
title: {type: String, require: true},
image: {type: String},
description: {type: String, required: true},
year: {type: number},
quantity: {type: number}

})