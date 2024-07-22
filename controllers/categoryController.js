const { Category } = require("../models/index");

class Controller {
  static async getCategory(req, res) {
    try {
      const category = await Category.findAll();

      res.status(200).json({
        statusCode: 200,
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

      await Category.create({
        name,
      });

      res.status(201).json({
        statusCode: 201,
        message: "create category successfully",
      });
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        res.status(400).json({ message: "category name is required" });
      }
      res.status(500).json({message: 'internal server error'})
    }
  }
}

module.exports = Controller;
