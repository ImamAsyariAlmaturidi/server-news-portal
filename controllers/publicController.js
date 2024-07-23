const { Article } = require("../models/index");
class Controller {
  static async getPublicData(req, res, next) {
    try {
      const article = await Article.findAll();
      res.status(200).json({
        statusCode: 200,
        data: article,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getPublicDataById(req, res, next) {
    const id = req.params.id;
    try {
      const article = await Article.findByPk(id);
      if (!article) {
        throw { name: "NotFound" };
      }
      res.status(200).json({
        statusCode: 200,
        data: article,
      });
    } catch (err) {
      next(err);
    }
  }
}


module.exports = Controller
