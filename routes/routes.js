const express = require('express')
const router = express.Router()
const userRoute = require('./routeUser')

router.use('/users', userRoute)

module.exports = router