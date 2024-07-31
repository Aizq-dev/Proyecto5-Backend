const express = require('express')

const autoRouter = require('./autos')

const router = express.Router()

router.use('/autos', autoRouter)

module.exports = router