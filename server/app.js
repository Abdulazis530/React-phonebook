const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const firebase = require("firebase");
const bodyParser = require('body-parser');
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");

const config = {
    apiKey: "AIzaSyB_JRL8i9I9Jtq_f7XrlZSBEOhaahSiqtI",
    authDomain: "phonebook-efd04.firebaseapp.com",
    databaseURL: "https://phonebook-efd04.firebaseio.com",
    projectId: "phonebook-efd04",
    storageBucket: "phonebook-efd04.appspot.com",
    messagingSenderId: "566339445128"
};
firebase.initializeApp(config);

var indexRouter = require('./routes/index');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);

const userSchema = require('./graphQl').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}))

module.exports = app;
