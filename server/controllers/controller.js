const db = require('../db');
const User = require('../db/schemas/user.js');
const express = require('express');
const Messages = require('../db/schemas/messages.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



const getMessages = (req, res) => {
  Messages.find({})
    .then( data => {
        res.status(200).send(data);
    })
}

const signUp = (req, res) => {
    User.register( new User({ username: req.body.username}), req.body.password, function(err, User) {
        if (err) {
            return res.render('register', {user: user});
        }
        passport.authenticate('local')(req, res, function() {
            res.status(201).send('Signed Up!');
        })
    })
}

const login =  (req, res) => {
    passport.authenticate('local');
    console.log('Hit Endpoint in login...', req.user);
    res.send(req.session);
    
    

    // User.find({ username: req.params.username })
    //       .then( data => {
    //           res.status(200).send(data);
    //       })
}

const getUserChannels = (req, res) => {
    User.findOne({username: req.user}, {channels})
}


module.exports.getMessages = getMessages;
module.exports.login = login;
module.exports.signup = signUp;