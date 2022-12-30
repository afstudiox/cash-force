const { Router } = require('express');
const orderController = require('../controllers/orderController');

const router = Router();

router.get('/', orderController.getAll);

module.exports = router;