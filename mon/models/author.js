const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model

const BookSchema = new Schema({
  title:String,
  pages:Number
});

//create schema and model

const AuthorSchema = new Schema({
  name:String,
  age:Number,
  books:[BookSchema]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
