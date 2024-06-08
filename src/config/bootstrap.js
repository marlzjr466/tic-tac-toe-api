const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const handler = require('@/resources/handler')

class Bootstrap {
  constructor () {
    this.app = express()
  }

  async start () {
    this.app
      // Used to handle cross domain
      .use(cors())

      // Used to accept data as json
      .use(bodyParser.json())

      // Used to handle form data
      .use(bodyParser.urlencoded({ extended: true }))

      // Parse an HTML body into a string
      .use(bodyParser.text({ type: '*/*' }))

      // init prefix and router
      .use('/tic-tac-toe', handler)
  }
}

module.exports = new Bootstrap()