const { DataTypes } = require('sequelize');

const attributes = {
  id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  cnpj: DataTypes.STRING,
  companyType: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

module.exports = (sequelize) => {
  const cnpjsModel = sequelize.define(
    'cnpjs', 
    attributes, 
    {
      timestamps: true,
      tableName: 'cnpjs'
    });

    cnpjsModel.associate = (models) => {
      cnpjsModel.hasMany(models.buyers, {
        foreignKey: 'cnpjId',
        as: 'buyers'
      });
      cnpjsModel.hasMany(models.providers, {
        foreignKey: 'cnpjId',
        as: 'providers'
      });
      cnpjsModel.hasMany(models.orders, {
        foreignKey: 'cnpjId',
        as: 'orders'
      });
    };
  return cnpjsModel;
};