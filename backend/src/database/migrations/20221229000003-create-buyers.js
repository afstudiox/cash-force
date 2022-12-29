'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      name: {allowNull: false, type: Sequelize.STRING},
      tradingName: {allowNull: true, field: 'trading_name', type: Sequelize.STRING},
      cashforceTax: {allowNull: true, field: 'cashforce_tax', type: Sequelize.STRING},
      responsibleName: {allowNull: true, field: 'responsible_name', type: Sequelize.STRING},
      responsibleEmail: {allowNull: true, field: 'responsible_email', type: Sequelize.STRING},
      responsiblePosition: {allowNull: true, field: 'responsible_position', type: Sequelize.STRING},
      responsiblePhone: {allowNull: true, field: 'responsible_phone', type: Sequelize.STRING},
      responsibleMobile: {allowNull: true, field: 'responsible_mobile', type: Sequelize.STRING},
      website: {allowNull: true, type: Sequelize.STRING},
      postalCode: {allowNull: true, field: 'postal_code', type: Sequelize.STRING},
      address: {allowNull: true, type: Sequelize.STRING},
      number: {allowNull: true, type: Sequelize.STRING},
      complement: {allowNull: true, type: Sequelize.STRING},
      neighborhood: {allowNull: true, type: Sequelize.STRING},
      city: {allowNull: true, type: Sequelize.STRING},
      state: {allowNull: true, type: Sequelize.STRING},
      phoneNumber: {allowNull: true, field: 'phone_number', type: Sequelize.STRING},
      situation: {allowNull: true, type: Sequelize.STRING},
      situationDate: {allowNull: true, field: 'situation_date', type: Sequelize.STRING},
      createdAt: {allowNull: false, field: 'created_at', type: Sequelize.DATE},
      updatedAt: {allowNull: false, field: 'updated_at', type: Sequelize.DATE},
      cnpjId: {allowNull: false, field: 'cnpj_id', type: Sequelize.INTEGER, references: {model: 'cnpjs', key: 'id'}, onDelete: 'CASCADE', onUpdate: 'CASCADE'},
      confirm: {defaultValue: 1, type: Sequelize.BOOLEAN },
      email: {allowNull: true, type: Sequelize.STRING},
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('buyers');
  }
};
