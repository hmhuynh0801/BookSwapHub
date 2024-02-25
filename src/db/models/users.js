const { connection, mongoose } = require('../connection')
// const mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Book model gives us funcitions to create, update delete, CRUD
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    studentId: String,
    email: String,
    password: String
});

let User = mongoose.model('User', userSchema)
module.exports = User 