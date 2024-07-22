const express = require("express");
const router = express.Router();

const Controller = require("../controllers/articleController");

router.get("/", Controller.getArticles);
router.get("/:id", Controller.getArticleById);
router.post("/", Controller.createArticle);
router.put("/:id", Controller.putArticleById);

module.exports = router;
