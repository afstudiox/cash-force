const ordersService = require('../services/orders.service');

const ordersController = {
  getAll: async (req, res) => {
    const orders = await ordersService.getAll();
    res.status(200).json(orders);
  }
};

module.exports = ordersController;