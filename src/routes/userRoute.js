const { Router } = require('express');
const userRouter = Router();
const mongoClient = require("../db/connection.js");
const db = mongoClient.db("bsh");


userRouter.get('/user', (req, res) => {
    res.send("Welcome to the backend!");
});

userRouter.post('/user', async (req, res) => {
    console.log(req.body);

    try{
        const users = db.collection('users');
        const newUser = await users.insertOne({
            ...req.body,
            
        });
        res.redirect('/index');
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
    res.send()
});

userRouter.get('/user/all', async (req, res) =>{
    try{
        const users = db.collection('users');
        const allUsers = await users.find({}).toArray();
        console.log(allUsers);
        res.json(allUsers);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
});


userRouter.get('/user/:email', async (req, res) => {
    const email = req.params.email;
    console.log(email);
    const users = db.collection('users');
    const myAcc = await users.findOne({email: email});
    res.json(myAcc);
    console.log(myAcc);
});

module.exports = userRouter;