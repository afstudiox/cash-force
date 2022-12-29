const { DataTypes } = require('sequelize');

const attributes = {
  id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  tax: DataTypes.STRING,
  tariff: DataTypes.STRING,
  adValorem: DataTypes.STRING,
  float: DataTypes.STRING,
  iof: DataTypes.STRING,
  expiresIn: DataTypes.DATE,
  paymentStatusSponsor: DataTypes.BOOLEAN,
  paymentStatusProvider: DataTypes.BOOLEAN,
  orderId: DataTypes.INTEGER,
  sponsorId: DataTypes.INTEGER,
};

module.exports = (sequelize) => {
  const offersModel = sequelize.define(
    'offers',
    attributes,
    {
      timestamps: true,
      tableName: 'offers'
    });

  offersModel.associate = (models) => {
    offersModel.belongsTo(models.orders, {
      foreignKey: 'orderId',
      as: 'order'
    });
    offersModel.belongsTo(models.sponsors, {
      foreignKey: 'sponsorId',
      as: 'sponsor'
    });
  };

  return offersModel;

};