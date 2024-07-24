const { Article, User } = require("../models/index");
const imageKit = require("../utils/imagekit");
class Controller {
  static async getArticles(req, res, next) {
    const { userId } = req.loginInfo;
    try {
      let status = 200;
      const articles = await Article.findAll({
        include: {
          model: User,
          attributes: ["username", "email", "phoneNumber", "address"],
        },
        where: {
          authorId: userId,
        },
      });
      res.status(status).json({
        statusCode: status,
        data: articles,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getArticleById(req, res, next) {
    const id = req.params.id;
    const { userId } = req.loginInfo;
    try {
      let status = 200;
      const article = await Article.findOne({
        where: {
          id,
          authorId: userId,
        },
        include: {
          model: User,
          attributes: ["username", "email", "phoneNumber", "address"],
        },
      });

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

  static async createArticle(req, res, next) {
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
      next(err);
    }
  }

  static async putArticleById(req, res, next) {
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
      next(err);
    }
  }

  static async deleteArticleById(req, res, next) {
    const id = req.params.id;
    try {
      const article = await Article.findByPk(id);
      if (!article) {
        throw { name: "NotFound" };
      }
      await Article.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: `${article.title} success to delete`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async patchImageArticleById(req, res, next) {
    const id = req.params.id;
    try {
      const imageInBase64 = req.file.buffer.toString("base64");

      const idArticle = await Article.findByPk(id);

      if (!idArticle) {
        throw { name: "NotFound" };
      }

      const result = await imageKit.upload({
        file: imageInBase64,

        fileName: req.file.originalname,

        tags: ["test"],
      });

      await Article.update(
        {
          url: result,
        },
        {
          where: {
            id: idArticle.id
          },
        }
      );
      res.status(200).json({
        message: "Update Image Successfully",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
