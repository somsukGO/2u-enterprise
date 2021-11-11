const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productInOrdersSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
    amount: {
      type: Number,
    },
    weigth: {
      type: Number,
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: 'orders',
    },
    total: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    updated_by: {
      type: Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
  },
  { timestamps: true }
);
const ProductInOrders = mongoose.model('product_in_orders', productInOrdersSchema);

module.exports = ProductInOrders;
