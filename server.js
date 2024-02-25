require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000;
const userRouter = require("./src/routes/userRoute")
const bookRouter = require("./src/routes/bookRoute")
const cors = require('cors');


app.use(cors()); //here HH

const aLoggerMiddleware = (req, res, next) => {
    console.log(req.url, req.method, res.statusCode.js);
    next();
}

app.use(aLoggerMiddleware);



// app.use(
//     bodyParser.urlencoded({ extended: true }),
//     bodyParser.json({ extended: true }),
// );

app.use(express.static('public/html'));
app.use(express.static('public'));
app.use(express.json()); //here HH
app.use(express.urlencoded({ extended: true })); //here HHH


//1 step connect to mongo db
//2 create book schema and book model
//3 create route
//4 post add data to mongo


app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);



app.get('/index', (req, res) => {
    res.redirect('/')
})

// app.get('/api/user', (req, res) => {
//     console.log(userInfo);
//     res.json(userInfo);
// });

app.get('/book-submit', (req, res) => {
    res.sendFile(__dirname + '/public/html/book-submit.html');
});


app.get('/find-book', (req, res) => {
    res.sendFile(__dirname + '/public/html/find-book.html');
});


app.get('/book-submit', (req, res) => {
    res.sendFile(__dirname + '/public/html/book-submit.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/html/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/html/contact.html');
});

app.get('/faq', (req, res) => {
    res.sendFile(__dirname + '/public/html/faq.html');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`click this link to open in your browser http://localhost:${port}`)
})


