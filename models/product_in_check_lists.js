const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productInCheckListsSchema = new Schema(
  {
    product_type: {
      type: Schema.Types.ObjectId,
      ref: 'product_types',
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
    amount: {
      type: Number,
    },
    weight: {
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
const ProductInCheckLists = mongoose.model('product_in_check_lists', productInCheckListsSchema);

module.exports = ProductInCheckLists;
