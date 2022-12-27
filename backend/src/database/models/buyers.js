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
  phoneNumber: {allowNull: true, type: DataTypes.STRING},
  situation: {allowNull: true, type: DataTypes.STRING},
  situationDate: {allowNull: true, type: DataTypes.STRING},
  createdAt: {allowNull: false, type: DataTypes.DATE},
  updatedAt: {allowNull: false, type: DataTypes.DATE},
  cnpjId: {allowNull: false, type: DataTypes.INTEGER, references: {model: 'cnpjs', key: 'id'}},
  confirm: {defaultValue: 1, type: DataTypes.TINYINT },
  email: {allowNull: true, type: DataTypes.STRING},
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


// ALTER TABLE `buyers`
//   ADD PRIMARY KEY (`id`),
//   ADD KEY `cnpjId` (`cnpjId`);

// ALTER TABLE `buyers`
//   ADD CONSTRAINT `buyers_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

