'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      orderNfId: {
        type: Sequelize.STRING,
        field: 'order_nf_id',
      },
      orderNumber: {
        type: Sequelize.STRING,
        field: 'order_number',
      },
      orderPath: {
        type: Sequelize.STRING,
        field: 'order_path',
      },
      orderFileName: {
        type: Sequelize.STRING,
        field: 'order_file_name',
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        field: 'order_original_name',
      },
      emissionDate: {
        type: Sequelize.STRING,
        field: 'emission_date',
      },
      pdfFile: {
        type: Sequelize.STRING,
        field: 'pdf_file',
      },
      emitedTo: {
        type: Sequelize.STRING,
        field: 'emited_to',
      },
      nNf: {
        type: Sequelize.STRING,
        field: 'n_nf',
      },
      CTE: {
        type: Sequelize.STRING,
        field: 'cte',
      },
      value: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        field: 'cnpj_id',
        allowNull: false,
        references: {
          model: 'cnpj',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      buyerId: {
        type: Sequelize.INTEGER,
        field: 'buyer_id',
        allowNull: false,
        references: {
          model: 'buyers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      providerId: {
        type: Sequelize.INTEGER,
        field: 'provider_id',
        allowNull: false,
        references: {
          model: 'providers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        field: 'order_status_buyer',
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        field: 'order_status_provider',
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        field: 'delivery_receipt',
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        field: 'cargo_packing_list',
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        field: 'delivery_ctrc',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
