const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const memberSchema = new mongoose.Schema({
    id: Number,
    userId: Number,
    channelId: Number
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;