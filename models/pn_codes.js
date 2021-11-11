const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pnCodesSchema = new Schema(
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
    partner_type: {
      type: Schema.Types.ObjectId,
      ref: 'partner_types',
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
const PnCodes = mongoose.model('pn_codes', pnCodesSchema);

module.exports = PnCodes;
