const express = require("express");
const router = express.Router();
const errorHandler = require("../middlewares/errorHandlers");
const authentication = require("../middlewares/authentication");
const { authorizationAdmin } = require("../middlewares/authorization");
const ControllerUser = require("../controllers/userController");
const Controller = require("../controllers/authController");

router.post("/login", Controller.login);

router.use(authentication);
router.post("/add-user", authorizationAdmin, ControllerUser.createUser);
router.use(errorHandler);

module.exports = router;
