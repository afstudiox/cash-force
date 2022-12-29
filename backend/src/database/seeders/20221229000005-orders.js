'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          order_nf_id: '1605181324132',
          order_number: '18153',
          order_path: null,
          order_file_name: null,
          order_original_name: null,
          emission_date: '2020-10-30T11:00:00-03:00',
          pdf_file: null,
          emited_to: '22843980000127',
          n_nf: '18153',
          cte: '',
          value: '198450',
          created_at: '2020-10-30 17:54:18',
          updated_at: '2020-10-30 17:54:18',
          cnpj_id: 1,
          user_id: 1,
          buyer_id: 1,
          provider_id: 1,
          order_status_buyer: '0',
          order_status_provider: '0',
          delivery_receipt: null,
          cargo_packing_list: null,
          delivery_ctrc: null,
        },
        {
          order_nf_id: '160518132413',
          order_number: '18157',
          order_path: null,
          order_file_name: null,
          order_original_name: null,
          emission_date: '2020-11-04T15:32:35-02:00',
          pdf_file: null,
          emited_to: '35705180000272',
          n_nf: '18157',
          cte: '',
          value: '168850',
          created_at: '2020-11-10 18:33:46',
          updated_at: '2020-11-10 18:33:46',
          cnpj_id: 1,
          user_id: 1,
          buyer_id: 1,
          provider_id: 1,
          order_status_buyer: '0',
          order_status_provider: '0',
          delivery_receipt: null,
          cargo_packing_list: null,
          delivery_ctrc: null,
        },
        {
          order_nf_id: '1605181324130',
          order_number: '18184',
          order_path: null,
          order_file_name: null,
          order_original_name: null,
          emission_date: '2020-11-10',
          pdf_file: null,
          emited_to: '00418477002640',
          n_nf: '18184',
          cte: '',
          value: '222795',
          created_at: '2020-11-12 11:42:06',
          updated_at: '2020-11-18 12:22:14',
          cnpj_id: 1,
          user_id: 1,
          buyer_id: 1,
          provider_id: 1,
          order_status_buyer: '7',
          order_status_provider: '3',
          delivery_receipt: null,
          cargo_packing_list: null,
          delivery_ctrc: null,
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
