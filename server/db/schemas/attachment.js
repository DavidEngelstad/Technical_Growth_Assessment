const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const attachmentSchema = new mongoose.Schema({
    id: Number,
    url: {type: String, default: 'none'}
});

const Attachment = mongoose.model('Attachment', attachmentSchema);

module.exports = Attachment;