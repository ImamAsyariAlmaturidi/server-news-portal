const express = require("express");
const router = express.Router();

const Controller = require("../controllers/articleController");
const authentication = require('../middlewares/authentication')
const errorHandler = require('../middlewares/errorHandlers')

router.use(authentication)
router.get("/", Controller.getArticles);
router.get("/:id", Controller.getArticleById);
router.post("/", Controller.createArticle);
router.put("/:id", Controller.putArticleById);

router.use(errorHandler)
module.exports = router;
