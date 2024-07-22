const express = require("express");
const router = express.Router();

const Controller = require("../controllers/categoryController");

router.get("/", Controller.getCategory);
router.post("/", Controller.createCategory);
router.delete("/:id", Controller.deleteCategoryById);
router.put("/:id", Controller.putCategoryById);





module.exports = router;
