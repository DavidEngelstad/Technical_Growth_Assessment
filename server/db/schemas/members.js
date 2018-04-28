const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const memberSchema = new mongoose.Schema({
    username: String,
    channel_id: String,
    team_id: String
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;