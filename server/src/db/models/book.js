const { default: mongoose } = require("mongoose");


const bookSchema = new mongoose.Schema({
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



module.exports = { Book }