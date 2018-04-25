const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const starSchema = new mongoose.Schema({
    message_id: Number,
    username: String,
    channel: String
})

const Star = mongoose.model('Star', starSchema);

module.exports = Star;