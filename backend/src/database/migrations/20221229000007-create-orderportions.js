'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderPortions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nDup: {
        type: Sequelize.STRING,
        field: 'n_dup'
      },
      dVenc: {
        type: Sequelize.STRING,
        field: 'd_venc'
      },
      vDup: {
        type: Sequelize.STRING,
        field: 'v_dup'
      },
      availableToMarket: {
        type: Sequelize.BOOLEAN,
        field: 'available_to_market'
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
      orderId: {
        type: Sequelize.INTEGER,
        field: 'order_id',
        references: {
          model: 'orders',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orderPortions'); 
  }
};
