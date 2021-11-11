const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
const ProductTypes = require('../models/product_types');
const Costs = require('../models/costs');

const productsSchema = new Schema(
  {
    no: {
      type: String,
    },
    name: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    product_type: {
      type: Schema.Types.ObjectId,
      ref: 'product_types',
    },
    costDB: {
      type: Schema.Types.ObjectId,
      ref: 'costs',
    },
    balanceAlert: {
      type: Number,
    },
    balance: {
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

productsSchema.plugin(mongoosePaginate);

const Product = mongoose.model('products', productsSchema);

module.exports = Product;
