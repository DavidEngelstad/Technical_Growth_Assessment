const db = require('../db');
const User = require('../db/schemas/user.js');
const Team = require('../db/schemas/teams.js');
const Channels = require('../db/schemas/channels.js');
const Messages = require('../db/schemas/messages.js');
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



const getMessages = (req, res) => {
  Messages.find({channel: req.params.channel})
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
    res.send(req.session);
    
    

    // User.find({ username: req.params.username })
    //       .then( data => {
    //           res.status(200).send(data);
    //       })
}

const logout = (req, res) => {
    console.log('Hit logout endpoint...');
    req.logout();
    res.send('sucessfully logged out')
    // req.session.destroy(function(err) {
    //     res.send('Sucessfully logged out');
    // })
}

const getUserChannels = (req, res) => {
    User.findOne({username: req.user}, {channels})
}

const findTeam = (req, res) => {
    console.log(req.params);
    Team.findOne({team_name: req.params.team })
      .then(data => {
          console.log('In find team...', data);
          res.send(data);
        //   data !== null ? res.send(data) : res.send('Channel not found');
      })
      .catch(err => {
          res.send(err);
      })

}

const getTeamChannels = (req, res) => {
    // console.log('In controller...', req.params);
    Channels.find({team_id: req.params.team_id})
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.send(err);
      })
}

const createTeam = (req, res) => {
    // console.log('In CreateTeam...', req.body);
    newTeam = new Team({id: 2, team_name: req.body.team_name})
    newTeam.save((err) => {
      if (err) console.log(err);
      res.send('Saved to db');
    })
}

const postMessage = (req, res) => {
    console.log('In Post Message... ', req.params);
    const {team, channel, user, message, parent, attachment, reaction} = req.params;
    newMessage = new Messages({
        team_id: team,
        channel: channel,
        username: user,
        text: message,
        reaction_id: reaction,
        parent: parent,
        attachment_id: attachment

    });
    newMessage.save((err) => {
        if (err) console.log(err);
        res.send('message saved');
    })
}

const createChannel = (req, res) => {
    const {name, team} = req.params;
    console.log(req.params);
    newChannel = new Channels({
        name: name,
        team_id: team
    });
    
    newChannel.save((err) => {
        if (err) console.log(err);
        res.send('Channel Created');
    })
}


module.exports.getMessages = getMessages;
module.exports.login = login;
module.exports.signup = signUp;
module.exports.logout = logout;
module.exports.findTeam = findTeam;
module.exports.getTeamChannels = getTeamChannels;
module.exports.createTeam = createTeam;
module.exports.postMessage = postMessage;
module.exports.createChannel = createChannel;