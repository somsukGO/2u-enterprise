const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productCheckListsSchema = new Schema(
  {
    no: {
      type: String,
    },
    date: {
      type: Date,
    },
    round: {
      type: String,
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
    },
    vehicle_type: {
      type: Schema.Types.ObjectId,
      ref: 'vehicle_types',
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
    },
    bill_no: {
      type: String,
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'partners',
    },
    product_in_check_lists: {
      type: [Schema.Types.ObjectId],
      ref: 'product_in_check_lists',
    },
    total_amount: {
      type: Number,
    },
    total_weight: {
      type: Number,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'companies',
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
const ProductCheckLists = mongoose.model('product_check_lists', productCheckListsSchema);

module.exports = ProductCheckLists;
