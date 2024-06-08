require('module-alias/register')

const serverless = require('serverless-http')
const app = require('@app')

module.exports.handler = serverless(app)