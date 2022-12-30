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
  bank: DataTypes.STRING,
  bankAgency: DataTypes.STRING,
  account: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: DataTypes.STRING,
  cnpjId: DataTypes.INTEGER,
  email: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const sponsorsModel = sequelize.define(
    'sponsors', 
    attributes,
    {
      timestamps: true,
      tableName: 'sponsors',
  });
  sponsorsModel.associate = (models) => {
    sponsorsModel.belongsTo(models.cnpjs, {
      foreignKey: 'cnpjId',
      as: 'cnpj'
    });
    sponsorsModel.hasMany(models.offers, {
      foreignKey: 'sponsorId',
      as: 'offer'
    });
  };
  return sponsorsModel;
};
