const express = require("express");
const router = express.Router();
const categoryRoutes = require("./routeCategory");
const articleRoutes = require("./routeArticle");
const authRoutes = require("./routeAuth")
router.use("/category", categoryRoutes);
router.use("/article", articleRoutes);
router.use("/user", authRoutes);

module.exports = router;
