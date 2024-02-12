// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://hmhuynh1:Hmh0929@books-data.xk6gxfq.mongodb.net/?retryWrites=true&w=majority');
  console.log("mongodb connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}