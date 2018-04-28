const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
const passport = require('passport');

//Fetch messages from the general channel on load
router.get('/messages/:channel', (req, res) => controller.getMessages(req, res));

//Sign up User
router.post('/user/signup', (req, res) => controller.signup(req, res));

//Allow a user to login and see their general messages and their subscibed channels and dms
router.post('/user/login', passport.authenticate('local'), (req, res) => controller.login(req,res));

//Allow a logged in user to fetch channels that they have joined
router.get('/user/channels', (req, res) => controller.getUserChannels(req, res));

//Change the messages to those in the selected channel
router.get('/channel/:name/messages', (req, res) => controller.getChannelMessages(req, res));

//allow user to logout
router.get('/user/logout', (req, res) => controller.logout(req, res));

//allow user to join a team after logging in
router.get('/findTeam/:team', (req, res) => controller.findTeam(req, res));

//fetch channels in tean when team is joined
router.get('/channel/:team_id', (req, res) => controller.getTeamChannels(req, res));

//Allow a user to create a team
router.post('/createTeam', (req, res) => controller.createTeam(req, res));

//Allow user to post to a channel
router.post('/messages/:team/:channel/:user/:message', (req, res) => controller.postMessage(req, res));

//Allow user to create a channel for a team
router.post('/createChannel/:team/:name', (req, res) => controller.createChannel(req, res));

//Get users that belong to a team
router.get('/members/:team', (req, res) => controller.getTeamMembers(req, res));
//Allow user to join a channel

//Allow user to star a post

//Allow a user to star a channel

//Allow a user to add a reaction to a message

//Allow a user to add an attachment to a message

//Allow a user to join a team

//For topbar, allow user to see all of the other users subscribed to a channel




module.exports = router;