require('dotenv').config()
require('module-alias/register')

const bootstrap = require('@/config/bootstrap')
const db = require('@/config/mongo-db')

bootstrap.start()
db.start()

module.exports = bootstrap.app