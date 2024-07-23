const { Category } = require("../models/index");

class Controller {
  static async getCategory(req, res, next) {
    try {
      let status = 200;
      const category = await Category.findAll();

      res.status(status).json({
        statusCode: status,
        data: category,
      });
    } catch (err) {
     next(err)
    }
  }

  static async createCategory(req, res, next) {
    const name = req.body.name;
    try {
      let status = 201;
      const newCategory = await Category.create({
        name,
      });

      res.status(status).json({
        statusCode: status,
        data: newCategory,
      });
    } catch (err) {
      next(err)
    }
  }

  static async deleteCategoryById(req, res, next) {
    const id = req.params.id;
    try {
      let status = 200;

      const category = await Category.findByPk(id);

      if (!category) {
        throw { message: "NotFound" };
      }

      await Category.destroy({
        where: {
          id,
        },
      });
      res
        .status(status)
        .json({ message: `${category.name} success to delete` });
    } catch (err) {
     next(err)
    }
  }

  static async putCategoryById(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    try {
      let status = 200;

      await Category.update({ name }, { where: { id } });

      const category = await Category.findByPk(id);
      if (!category) {
        throw { message: "Category not found" };
      }
      res.status(status).json({
        statusCode: status,
        data: category,
      });
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller;
