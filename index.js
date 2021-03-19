const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const route = require('./route');

// connection url 2 type
// 1: local mongo db database than mongodb://localhost:27017/<database name>
// -> run on 3000 port
// 2: MLAB databse than connection url is mongodb+srv://User:akshay0240@cluster0.5royq.mongodb.net/student?retryWrites=true&w=majority
// requrired line 18 port process.env.PORT 
// in packeage.js start file name
//and at last heroku deployment 

mongoose.connect("mongodb+srv://User:akshay0240@cluster0.5royq.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true}).then(
    ()=>{
        const app = express();
        app.use(bodyparser.urlencoded({extended:true}));
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server stared..!!!");
        });
    }
);