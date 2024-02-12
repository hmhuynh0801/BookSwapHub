const { Router } = require('express');
const bookRouter = Router();
const mongoClient = require("../db/connection.js");
const db = mongoClient.db("bsh");
const { ObjectId } = require('mongodb');



bookRouter.post('/book', async (req, res) => {
    console.log(req.body);

    try{
        const books = db.collection('books');
        const newBook = await books.insertOne({
            ...req.body,
            
        });
        // res.json(newBook);
        res.redirect('/find-book');
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
});



bookRouter.get('/book', async (req, res) =>{
    try{
        const books = db.collection('books');
        const allBooks = await books.find({});
        // console.log(allBooks);
        // bookInfo = JSON.stringify(allBooks)
        res.json(allBooks);
        res.redirect('/index');
        
        // res.send(bookInfo);
        // res.send(renderBooksHTML(allBooks));
        

    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
});

bookRouter.get('/book/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    console.log(isbn);
    const books = db.collection('books');
    const myBook = await books.findOne({isbn: isbn});
    res.json(myBook);
    console.log(myBook);
});




module.exports = bookRouter;