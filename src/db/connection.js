const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const mongoClient = new MongoClient(url);
module.exports = mongoClient