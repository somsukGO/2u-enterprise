const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnersSchema = new Schema(
  {
    name: {
      type: String,
    },
    tax: {
      type: String,
    },
    email: {
      type: String,
    },
    tel: {
      type: String,
    },
    fax: {
      type: String,
    },
    no: {
      type: String,
    },
    credit: {
      type: Number,
    },
    coordi: {
      type: String,
    },
    village: {
      type: String,
    },
    province: {
      type: Schema.Types.ObjectId,
      ref: 'provinces',
    },
    district: {
      type: Schema.Types.ObjectId,
      ref: 'districts',
    },
    country: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    position: {
      type: String,
    },
    partner_type: {
      type: Schema.Types.ObjectId,
      ref: 'partner_types',
    },
    coordiTel: {
      type: String,
    },
    coordinates: {},
    addr: {
      type: String,
    },
    abroad: {
      type: Boolean,
    },
    abroadProvince: {
      type: String,
    },
    abroadDistrict: {
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
const Partners = mongoose.model('partners', partnersSchema);

module.exports = Partners;
