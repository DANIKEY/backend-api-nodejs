'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class excuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  excuses.init({
    http_code: DataTypes.INTEGER,
    tag: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'excuses',
  });
  return excuses;
};