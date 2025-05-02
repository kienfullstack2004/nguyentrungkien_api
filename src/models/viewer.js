'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viewer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Viewer.hasOne(models.PostList, { foreignKey: "id", as: "postdata" })
      Viewer.hasOne(models.CoursesOnline, { foreignKey:"id",as:'coursesdata'})
    }
  }
  Viewer.init({
    viewer: DataTypes.INTEGER,
    idrelative: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Viewer',
  });
  return Viewer;
};