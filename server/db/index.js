const mongoose = require('mongoose');
//connect to local db
const db = mongoose.connect('mongodb://localhost/slack');

//schemas
const User = require('./schemas/user.js');
const Team = require('./schemas/teams.js');
const Reactions = require('./schemas/reactions.js');
const Messages = require('./schemas/messages.js');
const Members = require('./schemas/members.js');
const Channels = require('./schemas/channels.js');

module.exports = db;