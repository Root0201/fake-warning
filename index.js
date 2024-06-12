const mongoose = require('mongoose');
const { connection } = mongoose;

mongoose.connect(`mongodb+srv://DaInfLoop:${process.env.MONGOPASS}@cluster0.omk0m.mongodb.net/2chat?retryWrites=true&w=majority`)

connection.on('open', async () => {
  console.log("Successfully launched Mongoose!")
})

module.exports = mongoose

module.exports.Models = {
  User: require('./models/User'),
  Message: require('./models/Message'),
  Channel: require('./models/Channel')
}