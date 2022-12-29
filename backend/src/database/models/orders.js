const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  orderNfId: DataTypes.STRING,
  orderNumber: DataTypes.STRING,
  orderPath: DataTypes.STRING,
  orderFileName: DataTypes.STRING,
  orderOriginalName: DataTypes.STRING,
  emissionDate: DataTypes.STRING,
  pdfFile: DataTypes.STRING,
  emitedTo: DataTypes.STRING,
  nNf: DataTypes.STRING,
  CTE: DataTypes.STRING,
  value: DataTypes.STRING,
  cnpjId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
  buyerId: DataTypes.INTEGER,
  providerId: DataTypes.INTEGER,
  orderStatusBuyer: DataTypes.STRING,
  orderStatusProvider: DataTypes.STRING,
  deliveryReceipt: DataTypes.STRING,
  cargoPackingList: DataTypes.STRING,
  deliveryCtrc: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const ordersModel = sequelize.define('orders', attributes, {
    timestamps: true,
    tableName: 'orders',
  });

  ordersModel.associate = (models) => {
    ordersModel.belongsTo(models.cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
    });
    ordersModel.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'user',
    });
    ordersModel.belongsTo(models.buyers, {
      foreignKey: 'buyerId',
      as: 'buyer',
    });
    ordersModel.belongsTo(models.providers, {
      foreignKey: 'providerId',
      as: 'provider',
    });
  };
  return ordersModel;
};