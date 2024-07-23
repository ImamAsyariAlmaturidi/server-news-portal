const express = require("express");
const router = express.Router();
const Controller = require("../controllers/categoryController");
const authentication = require('../middlewares/authentication')
const errorHandler = require('../middlewares/errorHandlers')

router.use(authentication)
router.get("/", Controller.getCategory);
router.post("/", Controller.createCategory);
router.delete("/:id", Controller.deleteCategoryById);
router.put("/:id", Controller.putCategoryById);
router.use(errorHandler)




module.exports = router;