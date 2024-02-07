const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const connection = require("./src/db/connection.js") //connect to db HH

const booksRouter = require('./src/routes/books')

app.use(cors()); //here HH
app.use(express.json()); //here HH
app.use(express.urlencoded({extended: true})); //here HHH

app.use('/api/books', booksRouter)

app.get('/', (req, res) => {
    res.send('Hello World!...')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//1 step connect to mongo db
//2 create book schema and book model
//3 create route
//4 post add data to mongo



//users



//books