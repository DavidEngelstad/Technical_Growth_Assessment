const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/routes.js')
const session = require('express-session')
const db = require('./db/index.js');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const FileStore = require('session-file-store')(session);
const uuid = require('uuid');
const passport = require('passport');


const LocalStrategy = require('passport-local').Strategy;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);
    
app.use(express.static(path.resolve(__dirname, '../client/dist')));

const User = require('./db/schemas/user.js');








app.listen(3000, function() {
    console.log('Listening on port 3000');
});
