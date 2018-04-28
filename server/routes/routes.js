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

//Add users that belong to a team
router.post('/members/:user/:teamid', (req, res) => controller.addTeamMembers(req, res));

//Get the members of a team
router.get('/members/:teamid', (req, res) => controller.getTeamMembers(req, res));





module.exports = router;