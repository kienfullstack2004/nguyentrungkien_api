'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostList.belongsTo(models.Viewer,{foreignKey:"id",targetKey:"idrelative",as:"postdata"})
      PostList.belongsTo(models.User,{foreignKey:"author",targetKey:"username",as:"userdata"})
    }
  }
  PostList.init({
    title: DataTypes.STRING,
    des: DataTypes.STRING,
    image: DataTypes.STRING,
    author: DataTypes.STRING,
    viewers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostList',
  });
  return PostList;
};