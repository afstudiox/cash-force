const { orders, buyers, providers, cnpjs, users } = require('../database/models');

const ordersService = {
  getAll: async () => {
    const ordersList = await orders.findAll({
      include: [ 
        { model: buyers, as: 'buyer', attributes: ['name'] }, 
        { model: providers, as: 'provider', attributes: ['name'] },
      ],
    });
    return ordersList;
  },
};

module.exports = ordersService;