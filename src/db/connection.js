require('dotenv').config();
const {MongoClient} = require('mongodb');
// const url = "mongodb+srv://hmhuynh1:Hmh0929@books-data.xk6gxfq.mongodb.net/?retryWrites=true&w=majority";
const url = `mongodb://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@192.168.171.67:27017/`;
// const url = `mongodb://localhost:${process.env.PORT}/`;
const mongoClient = new MongoClient(url);
module.exports = mongoClient
