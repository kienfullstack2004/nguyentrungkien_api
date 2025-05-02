'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Noti.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    iduser: DataTypes.STRING,
    idpost: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Noti',
  });
  return Noti;
};