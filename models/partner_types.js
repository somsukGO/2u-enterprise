const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerTypesSchema = new Schema(
  {
    name: {
      type: String,
    },
    pn_code: {
      type: Schema.Types.ObjectId,
      ref: 'pn_codes',
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
const ParterTypes = mongoose.model('partner_types', partnerTypesSchema);

module.exports = ParterTypes;
