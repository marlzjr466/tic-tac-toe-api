const mongoose = require('mongoose')

const ticTacToeSchema = new mongoose.Schema({
  round: {
    type: Number,
    required: true
  },
  draw: {
    type: Number,
    required: true
  },
  info: {
    type: Array,
    required: true
  },
  players: {
    type: Array,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Tictactoe', ticTacToeSchema)