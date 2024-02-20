const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8103;
const userRouter = require("./src/routes/userRoute")
const bookRouter = require("./src/routes/bookRoute")


app.use(express.static('public'));

const aLoggerMiddleware = (req, res, next) => {
    console.log(req.url, req.method, res.statusCode.js);
    next();
}

app.use(aLoggerMiddleware);

app.use(
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json({ extended: true }),
);
app.use(userRouter);
app.use(bookRouter);
// app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')

})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/api/user', (req, res) => {
    console.log(userInfo);
    res.json(userInfo);
});

app.get('/book-submit', (req, res) => {
    res.sendFile(__dirname + '/public/html/book-submit.html');
});


app.get('/find-book', (req, res) => {
    res.sendFile(__dirname + '/public/html/find-book.html');
});


app.get('/add-book', (req, res) => {
    res.sendFile(__dirname + '/public/html/add-book.html');
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
})


