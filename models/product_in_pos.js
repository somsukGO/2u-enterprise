const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productInPosSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
    price: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    total: {
      type: Number,
    },
    description: {
      type: String,
    },
    po: {
      type: Schema.Types.ObjectId,
      ref: 'pos',
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
const ProductInPos = mongoose.model('product_in_pos', productInPosSchema);

module.exports = ProductInPos;
