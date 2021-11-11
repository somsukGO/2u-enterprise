const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const banksSchema = new Schema(
  {
    name: {
      type: String,
    },
    account_no: {
      type: String,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'companies',
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'partners',
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
const Banks = mongoose.model('banks', banksSchema);

module.exports = Banks;
