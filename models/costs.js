const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const costsSchema = new Schema(
  {
    cost: {
      type: Number,
    },
    ISC: {
      type: Number,
    },
    OSC: {
      type: Number,
    },
    SC: {
      type: Number,
    },
    wage: {
      type: Number,
    },
    consumables: {
      type: Number,
    },
    other: {
      type: Number,
    },
    maxDiscount: {
      type: Number,
    },
    salePrice: {
      type: Number,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'products',
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
const Costs = mongoose.model('costs', costsSchema);

module.exports = Costs;
