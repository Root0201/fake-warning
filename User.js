const { model, Schema } = require('../index.js');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  titles: {
    type: Array
  }
})

module.exports = model('User', UserSchema)