const { Article, User } = require("../models/index");
class Controller {
  static async getArticles(req, res) {
    try {
      const articles = await Article.findAll({
        include: {
          model: User,
          attributes: ["username", "email", "phoneNumber", "address"],
        },
      });
      res.status(200).json({
        statusCode: 200,
        message: "OK",
        data: articles,
      });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async getArticleById(req, res) {
    const id = req.params.id
    console.log(id)
    try {
        const article = await Article.findByPk(id)
        res.status(200).json({
            statusCode: 200,
            message: "OK",
            data: article
        })
    } catch (error) {
        console.log(error)
      res.status(404).json({ message: "Not Found" });
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
      if (error.name === "SequelizeValidationError") {
        res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: "internal server error" });
    }
  }
}

module.exports = Controller;
