const { Article, User } = require("../models/index");
class Controller {
  static async getArticles(req, res, next) {
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
        data: articles,
      });
    } catch (err) {
        console.log(err)
      next(err)
    }
  }

  static async getArticleById(req, res, next) {
    const id = req.params.id;
    try {
      let status = 200;
      const article = await Article.findByPk(id);

      if (!article) {
        throw { name: "NotFound" };
      }

      res.status(status).json({
        statusCode: status,
        data: article,
      });
    } catch (err) {
      next(err);
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
        data: newArticle,
      });
    } catch (err) {
        next(err)
    }
  }

  static async putArticleById(req, res) {
    const id = req.params.id;
    const { title, content, imgUrl, categoryId, authorId } = req.body;

    try {
      let status = 200;
      const article = Article.findByPk(id);
      if (!article) {
        throw { name: "NotFound" };
      }
      await Article.update(
        {
          title,
          content,
          imgUrl,
          categoryId,
          authorId,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(status).json({
        statusCode: status,
        data: article,
      });
    } catch (err) {
     next(err)
    }
  }
}

module.exports = Controller;
