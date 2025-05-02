'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoursesOnline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CoursesOnline.belongsTo(models.Viewer,{foreignKey:"id",targetKey:"idrelative",as:"coursesdata"})
    }
  }
  CoursesOnline.init({
    title: DataTypes.STRING,
    des: DataTypes.STRING,
    image: DataTypes.STRING,
    viewer: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CoursesOnline',
  });
  return CoursesOnline;
};