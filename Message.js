const { model, Schema } = require('../index.js');

const MessageSchema = new Schema({
  channel: String,
  author: String,
  date: Number,
  content: String,
  pfp: String,
  raw: Object
});

module.exports = model('Message', MessageSchema);