const { Router } = require('express');
const Book = require('../db/models/book');
const bookRouter = Router();
// const mongoClient = require("../db/connection.js");
// const db = mongoClient.db("bsh");
// const { ObjectId } = require('mongodb');




bookRouter.post('/', async (req, res) => {
    console.log(req.body);

    try {
        // const books = db.collection('books');
        const newBook = await Book.create({
            ...req.body,
        });
        return res.json(newBook);
    }
    catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

// bookRouter.post('/', async (req, res) => {
//     console.log(req.body); //i came from the browser

//     const result = await Book.create(req.body)

//     console.log("result:", result)



//     res.json({
//         message: "book added"
//     })



// })



bookRouter.get('', async (req, res) => {
    try {
        // const books = db.collection('books');
        const allBooks = await Book.find({});
        // console.log(allBooks);
        // bookInfo = JSON.stringify(allBooks)
        res.json(allBooks);

        // res.send(bookInfo);
        // res.send(renderBooksHTML(allBooks));


    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

// //when i want to get or read all books stored
// router.get('/', async (req, res) => {
//     const result = await Book.find();

//     res.json(result);
// })


bookRouter.get('/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    console.log(isbn);
    // const books = db.collection('books');
    const myBook = await Book.find({ isbn: isbn });
    console.log(myBook);
    res.json(myBook);
});




module.exports = bookRouter;