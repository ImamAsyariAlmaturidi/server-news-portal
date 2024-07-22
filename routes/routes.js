const express = require('express')
const router = express.Router()
const userRoute = require('./routeUser')
const categorRoutes = require('./routeCategory')

router.use('/users', userRoute)
router.use('/category', categorRoutes)

module.exports = router