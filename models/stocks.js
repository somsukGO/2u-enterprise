const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stocksSchema = Schema(
  {
    amount: {
      type: Number,
    },
    price: {
      type: Number,
    },
    balance: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
  },
  { timestamps: true }
);

const Stocks = mongoose.model('stocks', stocksSchema);

module.exports = Stocks;
