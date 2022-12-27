// `id` int(11) NOT NULL,
// `name` varchar(255) NOT NULL,
// `tradingName` varchar(255) DEFAULT NULL,
// `cashforceTax` varchar(255) DEFAULT NULL,
// `responsibleName` varchar(255) DEFAULT NULL,
// `responsibleEmail` varchar(255) DEFAULT NULL,
// `responsiblePosition` varchar(255) DEFAULT NULL,
// `responsiblePhone` varchar(255) DEFAULT NULL,
// `responsibleMobile` varchar(255) DEFAULT NULL,
// `website` varchar(255) DEFAULT NULL,
// `postalCode` varchar(255) DEFAULT NULL,
// `address` varchar(255) DEFAULT NULL,
// `number` varchar(255) DEFAULT NULL,
// `complement` varchar(255) DEFAULT NULL,
// `neighborhood` varchar(255) DEFAULT NULL,
// `city` varchar(255) DEFAULT NULL,
// `state` varchar(255) DEFAULT NULL,
// `bank` varchar(255) DEFAULT NULL,
// `bankAgency` varchar(255) DEFAULT NULL,
// `account` varchar(255) DEFAULT NULL,
// `documents` varchar(255) DEFAULT NULL,
// `phoneNumber` varchar(255) DEFAULT NULL,
// `situation` varchar(255) DEFAULT NULL,
// `situationDate` varchar(255) DEFAULT NULL,
// `createdAt` datetime NOT NULL,
// `updatedAt` datetime NOT NULL,
// `cnpjId` int(11) DEFAULT NULL,
// `email` varchar(255) DEFAULT NULL

// ADD PRIMARY KEY (`id`),
// ADD KEY `cnpjId` (`cnpjId`);

// ADD CONSTRAINT `providers_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

const { Module } = require('module');
const { DataTypes } = require('sequelize');

const attributes = {
  id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  name: {allowNull: false, type: DataTypes.STRING},
  tradingName: {allowNull: true, type: DataTypes.STRING},
  cashforceTax: {allowNull: true, type: DataTypes.STRING},
  responsibleName: {allowNull: true, type: DataTypes.STRING},
  responsibleEmail: {allowNull: true, type: DataTypes.STRING},
  responsiblePosition: {allowNull: true, type: DataTypes.STRING},
  responsiblePhone: {allowNull: true, type: DataTypes.STRING},
  responsibleMobile: {allowNull: true, type: DataTypes.STRING},
  website: {allowNull: true, type: DataTypes.STRING},
  postalCode: {allowNull: true, type: DataTypes.STRING},
  address: {allowNull: true, type: DataTypes.STRING},
  number: {allowNull: true, type: DataTypes.STRING},
  complement: {allowNull: true, type: DataTypes.STRING},
  neighborhood: {allowNull: true, type: DataTypes.STRING},
  city: {allowNull: true, type: DataTypes.STRING},
  state: {allowNull: true, type: DataTypes.STRING},
  bank: {allowNull: true, type: DataTypes.STRING},
  bankAgency: {allowNull: true, type: DataTypes.STRING},
  account: {allowNull: true, type: DataTypes.STRING},
  documents: {allowNull: true, type: DataTypes.STRING},
  phoneNumber: {allowNull: true, type: DataTypes.STRING},
  situation: {allowNull: true, type: DataTypes.STRING},
  situationDate: {allowNull: true, type: DataTypes.STRING},
  createdAt: {allowNull: false, type: DataTypes.DATE},
  updatedAt: {allowNull: false, type: DataTypes.DATE},
  cnpjId: {allowNull: true, type: DataTypes.INTEGER, references: {model: 'cnpjs', key: 'id'}},
  email: {allowNull: true, type: DataTypes.STRING}
};

module.exports = (sequelize) => {
  const providersModel = sequelize.define(
    'providers', 
    attributes,
    {
      timestamps: true,
      tableName: 'providers',
    });
  providersModel.associate = (models) => {
    providersModel.belongsTo(models.cnpjs, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
    });
  };
  return providersModel;
};