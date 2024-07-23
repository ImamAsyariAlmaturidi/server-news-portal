const express = require("express");
const router = express.Router();
const errorHandler = require('../middlewares/errorHandlers')
const Controller = require("../controllers/publicController");

router.get("/article", Controller.getPublicData);
router.get("/article/:id", Controller.getPublicDataById);
router.use(errorHandler)



module.exports = router;
