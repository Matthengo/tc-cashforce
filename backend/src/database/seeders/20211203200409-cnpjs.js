'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cnpjs', [
      {
        id: 1,
        cnpj: '00000000000001',
        companyType: '2',
      },
      {
        id: 2,
        cnpj: '00000000000002',
        companyType: '1',
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cnpjs', null, {});
  }
};
