const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle_controller');
const authenticateAccessToken = require('../utils/jwt_handler');

router.get('/findAll', authenticateAccessToken, vehicleController.findAll);
router.post('/checkVehicle', authenticateAccessToken, vehicleController.checkVehicle);

module.exports = router;
