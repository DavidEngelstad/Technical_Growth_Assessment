const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const messageSchema = new mongoose.Schema({
    team_id: String,
    channel: String,
    username: String,
    text: String,
    reaction_id: Number,
    parent: String,
    attachment_id: String
},
  {
      timestamps: true
  });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
