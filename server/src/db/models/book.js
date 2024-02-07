const mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Book model gives us funcitions to create, update delete, CRUD
const bookSchema = new Schema({
    title: String,
    publisher: String,
    author: String,
    firstName: String,
    lastName: String,
    email: String,
    isbn: String,
    bookInterested: String,


});

let Book = mongoose.model('Book', bookSchema)



module.exports =  Book 