'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Selection extends Model {
    
    /*
     Helper method for defining associations.
     This method is not a part of Sequelize lifecycle.
     The `models/index` file will call this method automatically.
    */
     
    static associate(models) {
      // define association here
      Selection.belongsTo(models.Users, { foreignKey: 'UserId' });
    }
  };
  Selection.init({
    mood: DataTypes.STRING,
    format: DataTypes.STRING,
    author: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Selection',
  });
  return Selection;
};