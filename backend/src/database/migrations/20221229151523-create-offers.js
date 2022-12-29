'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tax: Sequelize.STRING,
      tariff: Sequelize.STRING,
      adValorem: {
        type: Sequelize.STRING, 
        field: 'ad_valorem'
      },
      float: Sequelize.STRING,
      iof: Sequelize.STRING,
      expiresIn: {
        type: Sequelize.DATE, 
        field: 'expires_in'
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN, 
        field: 'payment_status_sponsor'
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        field: 'payment_status_provider'
      },
      createdAt: {
        allowNull: false, 
        type: Sequelize.DATE, 
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false, 
        type: Sequelize.DATE, 
        field: 'updated_at'
      },
      orderId: {
        allowNull: false, 
        type: Sequelize.INTEGER, 
        field: 'order_id',
        references: {
          model: 'orders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sponsorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'sponsor_id',
        references: {
          model: 'sponsors',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('offers');
  }
};
