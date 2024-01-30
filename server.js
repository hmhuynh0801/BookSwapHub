const express = require('express')
const app = express()
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/index', (req, res) =>{
    console.log(path.join(__dirname,'public/html/index.html'));
    res.sendFile(path.join(__dirname,'public/html/index.html'));
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})