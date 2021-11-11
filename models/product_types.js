const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productTypesSchema = new Schema(
  {
    name: {
      type: String,
    },
    pd_code: {
      type: Schema.Types.ObjectId,
      ref: 'pd_codes',
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
const ProductTypes = mongoose.model('product_types', productTypesSchema);

module.exports = ProductTypes;
