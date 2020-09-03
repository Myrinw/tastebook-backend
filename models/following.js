'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class following extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      following.belongsTo
    }
  };
  following.init({
    followingUserId: DataTypes.INTEGER,
    followedUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'following',
  });
  return following;
};