'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      name: {allowNull: false, type: Sequelize.STRING},
      email: {allowNull: false, unique: true, type: Sequelize.STRING},
      phoneNumber: {allowNull: true, field: 'phone_number', type: Sequelize.STRING},
      mobile: {allowNull: true, type: Sequelize.STRING},
      departament: {allowNull: true, type: Sequelize.STRING},
      verificationCode: {allowNull: true,field: 'verification_code', type: Sequelize.STRING},
      emailChecked: {allowNull: false, field: 'email_checked', defaultValue: false, type: Sequelize.BOOLEAN},
      createdAt: {allowNull: false,  field: 'created_at', type: Sequelize.DATE},
      updatedAt: {allowNull: false, field: 'updated_at', type: Sequelize.DATE},
      cashforceAdm: {allowNull: false, field: 'cashforce_adm', defaultValue: false, type: Sequelize.BOOLEAN},
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
