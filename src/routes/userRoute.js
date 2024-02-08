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
        // res.json(newUser);
        res.redirect('/index');
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
    // res.json({weSawData: true});
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

module.exports = userRouter;