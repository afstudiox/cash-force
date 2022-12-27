const { DataTypes } = require('sequelize');

const attributes = {
  id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  mobile: DataTypes.STRING,
  departament: DataTypes.STRING,
  verificationCode: DataTypes.STRING,
  emailChecked: DataTypes.BOOLEAN,
  cashforceAdm: DataTypes.BOOLEAN,
};

module.exports = (sequelize) => {
  const usersModel = sequelize.define(
    'users',
    attributes,
    {
      timestamps: true,
      tableName: 'users'
    });
  return usersModel;
};