// `id` int(11) NOT NULL,
// `name` varchar(255) NOT NULL,
// `email` varchar(255) NOT NULL,
// `phoneNumber` varchar(255) DEFAULT NULL,
// `mobile` varchar(255) DEFAULT NULL,
// `departament` varchar(255) DEFAULT NULL,
// `verificationCode` varchar(255) DEFAULT NULL,
// `emailChecked` tinyint(1) DEFAULT 0,
// `createdAt` datetime NOT NULL,
// `updatedAt` datetime NOT NULL,
// `cashforceAdm` tinyint(1) DEFAULT 0

// ADD PRIMARY KEY (`id`),
// ADD UNIQUE KEY `email` (`email`);

const { DataTypes } = require('sequelize');

const attributes = {
  id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  name: {allowNull: false, type: DataTypes.STRING},
  email: {allowNull: false, unique: true, type: DataTypes.STRING},
  phoneNumber: {allowNull: true, type: DataTypes.STRING},
  mobile: {allowNull: true, type: DataTypes.STRING},
  departament: {allowNull: true, type: DataTypes.STRING},
  verificationCode: {allowNull: true, type: DataTypes.STRING},
  emailChecked: {allowNull: false, defaultValue: false, type: DataTypes.BOOLEAN},
  createdAt: {allowNull: false, type: DataTypes.DATE},
  updatedAt: {allowNull: false, type: DataTypes.DATE},
  cashforceAdm: {allowNull: false, defaultValue: false, type: DataTypes.BOOLEAN},
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