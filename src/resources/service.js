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
  },

  async init ({ user }) {
    const url = 'https://api.tapfiliate.com/1.6'
    const headers = {
      'X-Api-Key': 'b3bc98c5f996c30b113a1c9427eec4fbd8b5464d'
    };

    try {
      if (user.name) {
        var splittedName = user.name.split(' ');
      }

      const registerResponse = await axios.post(
        `${url}/affiliates/`,
        {
          firstname: user.name ? splittedName[0] : user.first_name,
          lastname: user.name
            ? splittedName[splittedName.length - 1]
            : user.last_name,
          email: user.email,
          custom_fields: {},
        },
        { headers }
      );

      // automatically approve affiliates
      const res = await axios.post(
        `${url}/programs/matchder/affiliates/`,
        {
          affiliate: {
            id: registerResponse.data.id,
          },
          approved: true,
        },
        { headers }
      );

      const info = res.data;
      info.register_response = registerResponse.data;

      return info
    } catch (error) {
      console.log('-------->', error)
      throw error
    }
  }
}