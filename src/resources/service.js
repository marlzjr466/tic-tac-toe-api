// tic-tac-toe table
const Model = require('./model')

module.exports = {
  async list () {
    try {
      const res = await Model.find()
      return res
    } catch (error) {
      throw error
    }
  },

  async create (body) {
    const game = new Model(body)

    try {
      const newGame = await game.save()
      return newGame
    } catch (error) {
      throw error
    }
  }
}