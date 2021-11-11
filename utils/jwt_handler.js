require('dotenv').config();
const jwt = require('jsonwebtoken');
const asyncHandler = require('../middlewares/async_handler');
const ErrorModel = require('../middlewares/error_model');

const authenticateAccessToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') && authHeader.split(' ')[1];
  if (!token) throw new ErrorModel('Token not found', 401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, value) => {
    if (err) {
      console.log(err);
      throw new ErrorModel(`${err}, Token can not be trusted`, 403);
    }
    next();
  });
});

module.exports = authenticateAccessToken;
