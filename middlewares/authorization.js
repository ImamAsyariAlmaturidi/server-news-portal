const { User, Article } = require("../models/index");

const authorizationAdmin = async (req, res, next) => {
  const { userId, role } = req.loginInfo;
  try {
    if (role === "Admin") {
      const user = await User.findByPk(userId);
      if (!user) throw { name: "Forbidden" };

      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
};

const authorizationStaff = async (req, res, next) => {
  const { userId, role } = req.loginInfo;
  try {
    if (role === "Staff") {
      const user = await User.findByPk(userId);
      if (!user) throw { name: "Forbidden" };

      const { id } = req.params;
      const article = await Article.findByPk(id);
      if (!article) throw { name: "NotFound" };

      if (article.authorId !== user.id) {
        throw { name: "Forbidden" };
      }
    }

    next();
  } catch (err) {
    console.log(err)
    next(err);
  }
};

module.exports = {
  authorizationAdmin,
  authorizationStaff,
};
