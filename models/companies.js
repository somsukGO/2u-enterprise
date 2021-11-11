const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companiesSchema = new Schema(
  {
    name: {
      type: String,
    },
    tax: {
      type: String,
    },
    tel: {
      type: String,
    },
    email: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    docColor: {
      type: String,
    },
    web: {
      type: String,
    },
    village: {
      type: String,
    },
    province: {
      type: Schema.Types.ObjectId,
      ref: 'companies',
    },
    district: {
      type: Schema.Types.ObjectId,
      ref: 'districts',
    },
    country: {
      type: String,
    },
    accountName: {
      type: String,
    },
    accountNo: {
      type: String,
    },
    swiftCode: {
      type: String,
    },
    beneficiaryBank: {
      type: String,
    },
    addr: {
      type: String,
    },
    banks: {
      type: [Schema.Types.ObjectId],
      ref: 'banks',
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
const Companies = mongoose.model('companies', companiesSchema);

module.exports = Companies;
