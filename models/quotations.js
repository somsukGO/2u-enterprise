const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotationsSchema = Schema(
  {
    status: {
      type: String,
    },
    published_at: {
      type: Date,
    },
    downCount: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    vat: {
      type: Number,
    },
    price: {
      type: Number,
    },
    remarks: {
      type: String,
    },
    payment: {
      type: String,
    },
    termOfDelivery: {
      type: String,
    },
    priceConfirmation: {
      type: String,
    },
    date: {
      type: Date,
    },
    no: {
      type: String,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companies',
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employees',
    },
    partner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'partners',
    },
  },
  { timestamps: true }
);

const Quotations = mongoose.model('quotations', quotationsSchema);

module.exports = Quotations;
