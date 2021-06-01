 'use strict';
const { Model } = require('sequelize');
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    
    /*
     Helper method for defining associations.
     This method is not a part of Sequelize lifecycle.
     The `models/index` file will call this method automatically.
    */

    static associate(models) {
      // define association here
      Users.hasMany(models.Selection, { foreignKey: 'UserId' });
    }
  };
  Users.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const hash = bcrypt.hashSync(value, saltRounds);
        this.setDataValue("password", hash);
      },
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};