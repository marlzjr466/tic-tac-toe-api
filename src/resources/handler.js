const express = require('express')
const router = express.Router()

// services
const service = require('./service')

router
  .get('/', async (req, res) => {
    try {
      const list = await service.list()

      res.status(200)
        .json(list)
    } catch (error) {
      console.log('get error:', error)

      res.status(500)
        .json({
          message: error.message
        })
    }
  })

  .post('/', async (req, res) => {
    try {
      const result = await service.create(req.body)

      res.status(201)
        .json(result)
    } catch (error) {
      console.log('post error:', error)

      res.status(400)
        .json({
          message: error.message
        })
    }
  })

module.exports = router