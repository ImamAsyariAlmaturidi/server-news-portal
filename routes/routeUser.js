const express = require("express");
const router = express.Router();

const Controller = require("../controllers/userController");

router.get("/", Controller.getUser);
router.get("/:id", Controller.getUserById);
router.delete("/:id", Controller.deleteUserById);
router.post("/", Controller.createUser);

module.exports = router;
