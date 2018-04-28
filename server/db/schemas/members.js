const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const memberSchema = new mongoose.Schema({
    userId: String,
    channelId: String,
    teamId: String
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;