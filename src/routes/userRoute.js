const { Router } = require('express');
const User = require('../db/models/users');
const userRouter = Router();
// const mongoClient = require("../db/connection.js");
// const db = mongoClient.db("book_swap_hub");
// const { db } = require('../db/connection.js')


userRouter.get('/', (req, res) => {
    res.send("Welcome to the backend!");
});

userRouter.post('/', async (req, res) => {
    console.log(req.body);

    try {

        const user = await User.create({ ...req.body })
        console.log('user created', { user })
        return res.redirect('/?page=signin');
    }
    catch (err) {
        console.error(err);
        return res.send(err.message).status(500);
    }
    return res.send()
});

userRouter.get('/all', async (req, res) => {
    try {
        // const users = db.collection('users');
        const allUsers = await User.find({}).toArray();
        console.log(allUsers);
        return res.json(allUsers);
    }
    catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});


userRouter.get('/:email', async (req, res) => {
    const email = req.params.email;
    console.log(email);
    // const users = db.collection('users');
    const myAcc = await User.findOne({ email });


    //check password
    res.json(myAcc);
    console.log(myAcc);
});

module.exports = userRouter;