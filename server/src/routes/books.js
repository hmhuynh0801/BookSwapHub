// book routes go here
const Book = require('../db/models/book');
const router = require('express').Router()

//when i want to get or read all books stored
router.get('/', async (req, res) => {
    const result = await Book.find();

    res.json(result);
})


//add a book to the database
router.post('/', async (req,res)=> {
    console.log(req.body); //i came from the browser
    
    const result = await Book.create(req.body)

        console.log("result:", result)
    


    res.json({
        message: "book added"
    })



})

//export the router to make the endpoints for books available
module.exports = router