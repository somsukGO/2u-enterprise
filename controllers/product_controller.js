const Products = require('../models/products');
const asyncHandler = require('../middlewares/async_handler');

const findAll = asyncHandler(async (req, res, next) => {
  const option = {
    limit: req.query.limit || 20,
    page: req.query.page || 1,
    populate: ['product_type', 'costDB'],
  };

  const data = await Products.paginate({}, option);

  return res.status(200).json(data);
});

module.exports = { findAll };
