const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
const passport = require('passport');

//Fetch messages from the general channel on load
router.get('/messages', (req, res) => controller.getMessages(req, res));

//Sign up User
router.post('/user/signup', (req, res) => controller.signup(req, res));

//Allow a user to login and see their general messages and their subscibed channels and dms
router.post('/user/login', passport.authenticate('local'), (req, res) => controller.login(req,res));

//Allow a logged in user to fetch channels that they have joined
router.get('/user/channels', (req, res) => controller.getUserChannels(req, res));

//Change the messages to those in the selected channel
router.get('/channel/:name/messages', (req, res) => controller.getChannelMessages(req, res));

//Allow user to join a channel

//Allow user to star a post

//Allow a user to star a channel

//Allow a user to add a reaction to a message

//Allow a user to add an attachment to a message

//Allow a user to join a team

//For topbar, allow user to see all of the other users subscribed to a channel

//Force a user to sign into a workspace before login


module.exports = router;