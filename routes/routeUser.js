const express = require("express");
const router = express.Router();

const Controller = require("../controllers/userController");

router.get("/", Controller.getUser);

module.exports = router;
