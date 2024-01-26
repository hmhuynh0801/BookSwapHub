const express = require('express')
const app = express()
const port = 3000



const booksRouter = require('./src/routes/books')

app.use('/api/books', booksRouter)

app.get('/', (req, res) => {
    res.send('Hello World!...')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})