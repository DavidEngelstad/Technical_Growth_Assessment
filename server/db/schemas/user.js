const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;