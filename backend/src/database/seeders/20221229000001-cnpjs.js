'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'cnpjs', 
      [
        {
          cnpj: '00000000000001',
          company_type: '2',
          created_at: '2020-10-29 21:20:33',
          updated_at: '2020-10-29 21:20:33',
        },
        {
          cnpj: '00000000000001',
          company_type: '2',
          created_at: '2020-10-29 21:20:33',
          updated_at: '2020-10-29 21:20:33',
        },       
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cnpjs', null, {});
  }
};
