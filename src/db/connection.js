// getting-started.js
const mongoose = require('mongoose');

const database_url = process.env.DATABASE_URL ?? "mongodb://localhost:27017/";

const connection = main().catch(err => console.log(err));

async function main() {
    console.log('connecting')
    await mongoose.connect(database_url, { maxPoolSize: 10 }).then(() => console.log('db connected'));

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = { connection, mongoose }