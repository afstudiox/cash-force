const { orders, buyers, providers, cnpjs, users } = require('../database/models');

const ordersService = {
  getAll: async () => {
    const ordersList = await orders.findAll({
      include: [ 
        { model: buyers, as: 'buyer', attributes: ['name'] }, 
        { model: providers, as: 'provider', attributes: ['name'] },
      ],
      raw: true,
    });
    return ordersList;
  },
};

module.exports = ordersService;