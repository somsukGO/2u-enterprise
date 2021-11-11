const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptsSchema = Schema(
  {
    no: {
      type: String,
    },
    date: {
      type: Date,
    },
    paymentMethod: {
      type: String,
    },
    acc_no: {
      type: String,
    },
    acc_name: {
      type: String,
    },
    date_tranfer: {
      type: Date,
    },
    published_at: {
      type: Date,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companies',
    },
    create_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employees',
    },
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'invoices',
    },
    partner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'partners',
    },
  },
  { timestamps: true }
);

const Receipts = mongoose.model('receipts', receiptsSchema);

module.exports = Receipts;
