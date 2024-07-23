const express = require("express");
const router = express.Router();
const categoryRoutes = require("./routeCategory");
const articleRoutes = require("./routeArticle");
const authRoutes = require("./routeAuth")
const publicRoutes = require('./routePublic')
router.use("/category", categoryRoutes);
router.use("/article", articleRoutes);
router.use("/user", authRoutes);
router.use("/public", publicRoutes);

module.exports = router;
