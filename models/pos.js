const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posSchema = new Schema(
  {
    no: {
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
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
    },
    date: {
      type: Date,
    },
    product_in_pos: {
      type: [Schema.Types.ObjectId],
      ref: 'product_in_pos',
    },
    remarks: {
      type: String,
    },
    price: {
      type: Number,
    },
    vat: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    status: {
      type: Date,
    },
    isActive: {
      type: Boolean,
    },
    get_po: {
      type: Schema.Types.ObjectId,
      ref: 'get_pos',
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
const Pos = mongoose.model('pos', posSchema);

module.exports = Pos;
