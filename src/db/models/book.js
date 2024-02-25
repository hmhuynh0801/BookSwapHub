const mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Book model gives us funcitions to create, update delete, CRUD
const bookSchema = new Schema({
    firstName: String,
    lastName: String,
    title: String,
    publisher: String,
    author: String,
    email: String,
    isbn: String,
    bookInterested: String,
    edition: String,


    


});

let Book = mongoose.model('Book', bookSchema)



module.exports =  Book 