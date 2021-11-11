const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const percentCountsSchema = new Schema(
  {
    no: {
      type: Number,
    },
    percent: {
      type: Number,
    },
    quotation: {
      type: Schema.Types.ObjectId,
      ref: 'quotations',
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
const PercentCounts = mongoose.model('percent_counts', percentCountsSchema);

module.exports = PercentCounts;
