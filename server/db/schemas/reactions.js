const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const reactionSchema = new mongoose.Schema({
    id: Number,
    user_id: Number,
    message_id: Number
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;