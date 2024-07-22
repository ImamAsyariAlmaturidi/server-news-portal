const express = require('express')
const router = express.Router()
const userRoutes = require('./routeArticle')
const categorRoutes = require('./routeCategory')
const articleRoutes = require('./routeArticle')

router.use('/users', userRoutes)
router.use('/category', categorRoutes)
router.use('/article', articleRoutes)

module.exports = router