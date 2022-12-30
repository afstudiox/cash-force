const ordersService = require('../services/orderServices');

const orderController = {
  getAll: async (req, res) => {
    const ordersList = await ordersService.getAll();
    res.status(200).json(ordersList);
  },
};

module.exports = orderController;