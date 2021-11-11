const mongoose = require('mongoose');

const productsInQuotationsSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    total: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    quotation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'quotations',
    },
    description: {
      type: String,
    },
    published_at: {
      type: Date,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
  },
  { timestamps: true }
);

const ProductsInQuotations = mongoose.model('products_in_quotations', productsInQuotationsSchema);

module.exports = ProductsInQuotations;
