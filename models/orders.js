const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    weight: {
      type: Number,
    },
    ref: {
      type: String,
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: 'jobs',
    },
    product_in_orders: {
      type: [Schema.Types.ObjectId],
      ref: 'product_in_orders',
    },
    no: {
      type: String,
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
const Orders = mongoose.model('orders', ordersSchema);

module.exports = Orders;
