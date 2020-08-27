'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.belongsTo(models.user)
      post.hasMany(models.like)
      post.hasMany(models.comment)
    }
  };
  post.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: {
      type: DataTypes,

    }
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};