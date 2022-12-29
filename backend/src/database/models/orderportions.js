const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false, 
    autoIncrement: true, 
    primaryKey: true, 
    type: DataTypes.INTEGER
  },
  nDup: DataTypes.STRING,
  dVenc: DataTypes.STRING,
  vDup: DataTypes.STRING,
  availableToMarket: DataTypes.BOOLEAN,
  orderId: DataTypes.INTEGER,
};

module.exports = (sequelize) => {
  const orderPortionsModel = sequelize.define(
    'orderPortions',
    attributes,
    {
      timestamps: true,
      tableName: 'orderPortions'
    });

  orderPortionsModel.associate = (models) => {
    orderPortionsModel.belongsTo(models.orders, {
      foreignKey: 'orderId',
      as: 'order'
    });
  };

  return orderPortionsModel;

};
