const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job_controller');
const authenticateAccessToken = require('../utils/jwt_handler');

router.get('/reportDriverWave', authenticateAccessToken, jobController.reportDriverWave);
router.get('/findByEmployee/:id', authenticateAccessToken, jobController.findByEmployee);

module.exports = router;
