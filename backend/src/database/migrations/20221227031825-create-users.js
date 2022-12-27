'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      name: {allowNull: false, type: Sequelize.STRING},
      email: {allowNull: false, unique: true, type: Sequelize.STRING},
      phoneNumber: {allowNull: true, type: Sequelize.STRING},
      mobile: {allowNull: true, type: Sequelize.STRING},
      departament: {allowNull: true, type: Sequelize.STRING},
      verificationCode: {allowNull: true, type: Sequelize.STRING},
      emailChecked: {allowNull: false, defaultValue: false, type: Sequelize.BOOLEAN},
      createdAt: {allowNull: false, type: Sequelize.DATE},
      updatedAt: {allowNull: false, type: Sequelize.DATE},
      cashforceAdm: {allowNull: false, defaultValue: false, type: Sequelize.BOOLEAN},
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
