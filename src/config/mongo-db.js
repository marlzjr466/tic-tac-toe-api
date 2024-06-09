const mongoose = require('mongoose')

class Mongoose {
  constructor () {
    this.url = process.env.MONGODB_URI
    this.options = { useNewUrlParser: true }
    this.db = null
  }

  start () {
    console.log('started connecting to mongo db...')
    mongoose.connect(this.url)
    this.db = mongoose.connection
    this.db.on('error', error => console.log('db connection error:', error))
    this.db.once('open', () => console.log('connected to database `tictactoe`'))
  }
}

module.exports = new Mongoose()