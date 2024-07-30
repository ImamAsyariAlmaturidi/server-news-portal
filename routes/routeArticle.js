const express = require("express");
const router = express.Router();

const authentication = require('../middlewares/authentication')
const Controller = require("../controllers/articleController");
const { authorizationStaff } = require('../middlewares/authorization');

const errorHandler = require('../middlewares/errorHandlers')

const  upload  = require('../utils/multer')

router.use(authentication);


router.get("/", Controller.getArticles);


router.get("/:id", Controller.getArticleById);


router.post("/", Controller.createArticle);

router.patch("/:id", authorizationStaff, upload.single('image'), Controller.patchImageArticleById);

router.put("/:id", authorizationStaff, Controller.putArticleById);

router.delete("/:id", authorizationStaff, Controller.deleteArticleById);

router.use(errorHandler)

module.exports = router;
