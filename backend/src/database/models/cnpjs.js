const { DataTypes } = require('sequelize');

const attributes = {
  id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  cnpj: {allowNull: false, unique: true, type: DataTypes.STRING},
  companyType: {allowNull: false, type: DataTypes.STRING},
  createdAt: {allowNull: false, type: DataTypes.DATE},
  updatedAt: {allowNull: false, type: DataTypes.DATE},
};

module.exports = (sequelize) => {
  const cnpjsModel = sequelize.define(
    'cnpjs', 
    attributes, 
    {
      timestamps: true,
      tableName: 'cnpjs'
    });
  return cnpjsModel;
};

// ALTER TABLE `cnpjs`
//   ADD PRIMARY KEY (`id`),
//   ADD UNIQUE KEY `cnpj` (`cnpj`);