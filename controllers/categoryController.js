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
      await Category.create({
        name,
      });

      res.status(status).json({
        statusCode: status,
        message: "create category successfully",
      });
    } catch (error) {
        console.log(error)
      let status = 500;
      let message = "Internal Server Error";

      if (error.name === "SequelizeUniqueConstraintError") {
        status = 400
        message = error.errors[0].message
      }
      res.status(status).json({ message });
    }
  }
}

module.exports = Controller;
