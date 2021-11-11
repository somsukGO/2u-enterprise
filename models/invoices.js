const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoicesSchema = new Schema(
  {
    no: {
      type: String,
    },
    refDoc: {
      type: String,
    },
    date: {
      type: Date,
    },
    status: {
      type: String,
    },
    quotation: {
      type: Schema.Types.ObjectId,
      ref: 'quotations',
    },
    paid: {
      type: Number,
    },
    price: {
      type: Number,
    },
    vat: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'companies',
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'partner',
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
    },
    create_by: {
      type: Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    update_by: {
      type: Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    receipt: {
      type: Schema.Types.ObjectId,
      ref: 'receipts',
    },
    products_in_invoices: {
      type: [Schema.Types.ObjectId],
      ref: 'products_in_invoices',
    },
    due_date: {
      type: Date,
    },
    remark: {
      type: String,
    },
    payment: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    credit: {
      type: Number,
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
const Invoices = mongoose.model('invoices', invoices);

module.exports = Invoices;
