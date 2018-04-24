const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const channelSchema = new mongoose.Schema({
    id: Number,
    name: String,
    team_id: Number,
    user_id: Number
}) 

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
