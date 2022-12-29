const { Router } = require('express');
const ordersController = require('../controllers/orders.controller');

const router = Router();

router.get('/orders', ordersController.getAll);

module.exports = router;