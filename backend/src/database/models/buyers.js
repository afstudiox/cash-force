const { DataTypes } = require('sequelize');

const attributes = {
  id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  name: DataTypes.STRING,
  tradingName: DataTypes.STRING,
  cashforceTax: DataTypes.STRING,
  responsibleName: DataTypes.STRING,
  responsibleEmail: DataTypes.STRING,
  responsiblePosition: DataTypes.STRING,
  responsiblePhone: DataTypes.STRING,
  responsibleMobile: DataTypes.STRING,
  website: DataTypes.STRING,
  postalCode: DataTypes.STRING,
  address: DataTypes.STRING,
  number: DataTypes.STRING,
  complement: DataTypes.STRING,
  neighborhood: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: DataTypes.STRING,
  cnpjId: DataTypes.INTEGER,
  confirm: DataTypes.BOOLEAN,
  email: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const buyersModel = sequelize.define(
    'buyers', 
    attributes, 
    {
      timestamps: true,
      tableName: 'buyers'
    });
  buyersModel.associate = (models) => {
    buyersModel.belongsTo(models.cnpjs, {
      foreignKey: 'cnpjId', 
      as: 'cnpj'
    });
  };
  return buyersModel;
};