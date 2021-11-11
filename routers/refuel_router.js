const express = require('express');
const router = express.Router();
const refuelController = require('../controllers/refuel_controller');
const authenticateAccessToken = require('../utils/jwt_handler');
const multer = require('multer');

const upload = multer({});

router.get('/findAll', authenticateAccessToken, refuelController.findAll);
router.get('/:id', authenticateAccessToken, refuelController.findById);
router.delete('/delete', authenticateAccessToken, refuelController.remove);

router.post(
  '/add',
  authenticateAccessToken,
  upload.fields([
    { name: 'billImage', maxCount: 1 },
    { name: 'mileageImage', maxCount: 1 },
    { name: 'priceImage', maxCount: 1 },
  ]),
  refuelController.add
);

router.put(
  '/update',
  authenticateAccessToken,
  upload.fields([
    { name: 'billImage', maxCount: 1 },
    { name: 'mileageImage', maxCount: 1 },
    { name: 'priceImage', maxCount: 1 },
  ]),
  refuelController.update
);

router.get('/networkImage/:imageName', refuelController.networkImage);

module.exports = router;
