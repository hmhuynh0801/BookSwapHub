const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    publisher: String,
});

module.exports = { Book: boookSchema }