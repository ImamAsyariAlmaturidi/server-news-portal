'use strict';
const {
  Model,
  DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User, { foreignKey: "authorId" })
      Article.belongsTo(models.Category, { foreignKey: "categoryId" })
    }
  }
  Article.init({
    title: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notNull: true,
      notEmpty: true
    }
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT, 
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    imgUrl : {
      allowNull: false, 
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
  },
 {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};