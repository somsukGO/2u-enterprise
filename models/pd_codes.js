const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pdCodesSchema = new Schema(
  {
    code: {
      type: String,
    },
    no: {
      type: Number,
    },
    date: {
      type: String,
    },
    product_type: {
      type: Schema.Types.ObjectId,
      ref: 'product_types',
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
const PdCodes = mongoose.model('pd_codes', pdCodesSchema);

module.exports = PdCodes;
