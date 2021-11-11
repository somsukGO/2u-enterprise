const mongoose = require('mongoose');

const productsInInvoicesSchema = mongoose.Schema(
  {
    price: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    total: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
    invoice: {
      type: mongoose.Schema.Types.Mixed,
      ref: 'invoices',
    },
    product: {
      type: mongoose.Schema.Types.Mixed,
      ref: 'products',
    },
  },
  { timestamps: true }
);

const ProductsInInvoices = mongoose.model('products_in_invoices', productsInInvoicesSchema);

module.exports = ProductsInInvoices;
