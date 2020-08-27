'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      food.belongsTo(models.user);
    }
  };
  food.init({
    restriction: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    alcohol: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    meal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'food',
  });
  return food;
};