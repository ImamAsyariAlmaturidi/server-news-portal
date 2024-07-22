const { Category } = require("../models/index");

class Controller {
  static async getCategory(req, res) {
    try {
      let status = 200;
      const category = await Category.findAll();

      res.status(status).json({
        statusCode: status,
        message: "OK",
        data: category,
      });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async createCategory(req, res) {
    const name = req.body.name;
    try {
      let status = 201;
      const newCategory = await Category.create({
        name,
      });

      res.status(status).json({
        statusCode: status,
        message: "create category successfully",
        data: newCategory,
      });
    } catch (error) {
      let status = 500;
      let message = "Internal Server Error";

      if (error.name === "SequelizeUniqueConstraintError") {
        status = 400;
        message = error.errors[0].message;
      }
      res.status(status).json({ message });
    }
  }

  static async deleteCategoryById(req, res) {
    const id = req.params.id;
    try {
      let status = 200;
      const category = await Category.findByPk(id);

      if (!category) {
        res.status(404).json({ message: "Category not found" });
      }

      await Category.destroy({
        where: {
          id,
        },
      });
      res
        .status(status)
        .json({ message: `${category.name} success to delete` });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async putCategoryById(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    try {
      const category = await Category.findByPk(id);

      let status = 200;
      let message = "OK";

      await Category.update({
        where: {
            id
        },
        name
      })

      if (!category) {
        status = 404;
        message = "Category not found";
      }
      res.status(status).json({
        statusCode: status,
        message,
        data: category
      })
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
  }
}

module.exports = Controller;
