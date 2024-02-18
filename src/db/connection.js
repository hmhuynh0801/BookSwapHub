const {MongoClient} = require('mongodb');
// const url = "mongodb+srv://hmhuynh1:Hmh0929@books-data.xk6gxfq.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb://book_swap_hub:725lw20d@192.168.171.67:27017/"
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
module.exports = mongoClient