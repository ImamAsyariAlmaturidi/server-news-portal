const { Article, Category } = require("../models/index");
const { Op } = require("sequelize");
class Controller {
  static async getPublicData(req, res, next) {
    const { filter, sort, page, search } = req.query;
    try {
      const paramsQuerySql = {};

      if (filter) {
        paramsQuerySql.where = {
          categoryId: filter,
        };
      }

      if (search) {
        paramsQuerySql.where = {
          title: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }

      if (sort) {
        const ordering = sort[0] === "-" ? "DESC" : "ASC";
        const columnName = ordering === "DESC" ? sort.slice(1) : sort;
        paramsQuerySql.order = [[columnName, ordering]];
      }

      let limit = 10;
      let pageNumber = 1;
      if (page) {
        if (page.size) {
          limit = page.size;
          paramsQuerySql.limit = limit;
        }

        if (page.number) {
          pageNumber = page.number;
          paramsQuerySql.offset = limit * (pageNumber - 1);
        }
      }

      const article = await Article.findAll(paramsQuerySql);

      if (article.length === 0) {
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

module.exports = Controller;
