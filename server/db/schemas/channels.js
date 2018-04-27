const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const channelSchema = new mongoose.Schema({
    name: String,
    team_id: String,
}) 

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
