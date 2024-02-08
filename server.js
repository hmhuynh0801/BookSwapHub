const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const userRouter = require("./src/routes/userRoute");

const aLoggerMiddleware = (req, res, next) => {
    console.log(req.url, req.method, res.statusCode.js);
    next();
}

app.use(aLoggerMiddleware);
app.use(express.static('public'));
app.use(
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json({ extended: false }),
);
app.use(userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/api/user', (req, res) => {
    console.log(userInfo);
    res.json(userInfo);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})