const express = require('express');
const router = express.Router();
const productController = require('../controllers/product_controller');
const authenticateAccessToken = require('../utils/jwt_handler');

router.get('/findAll', authenticateAccessToken, productController.findAll);

module.exports = router;
