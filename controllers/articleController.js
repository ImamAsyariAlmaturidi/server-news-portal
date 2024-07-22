const { Article, User } = require("../models/index");
class Controller {
  static async getArticles(req, res) {
    try {
      let status = 200;
      const articles = await Article.findAll({
        include: {
          model: User,
          attributes: ["username", "email", "phoneNumber", "address"],
        },
      });
      res.status(status).json({
        statusCode: status,
        message: "OK",
        data: articles,
      });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async getArticleById(req, res) {
    const id = req.params.id;
    try {
      let status = 200;
      const article = await Article.findByPk(id);

      if(!article) throw { message: "article not found"}

      res.status(status).json({
        statusCode: status,
        message: "OK",
        data: article,
      });
    } catch (error) {
      res.status(404).json({message: error.message});
    }
  }

  static async createArticle(req, res) {
    const { title, content, imgUrl, CategoryId, authorId } = req.body;
    try {
      const newArticle = await Article.create({
        title,
        content,
        imgUrl,
        CategoryId,
        authorId,
      });

      res.status(201).json({
        statusCode: 201,
        message: "success create article",
        data: newArticle,
      });
    } catch (error) {
        let status = 500
        let message = "Internal Server Error"
      if (error.name === "SequelizeValidationError") {
        status = 404
        message = error.errors[0].message
      }
      res.status(status).json({ message });
    }
  }
}

module.exports = Controller;
