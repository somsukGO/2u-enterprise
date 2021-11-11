const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceSummaryDetailsSchema = new Schema(
  {
    maintenance_summary: {
      type: Schema.Types.ObjectId,
      ref: 'm_aintenance_summaries',
    },
    maintenance_type: {
      type: Schema.Types.ObjectId,
      ref: 'm_aintenance_summaries',
    },
    name: {
      type: String,
    },
    detail: {
      type: String,
    },
    cost: {
      type: Number,
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'partners',
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
const MaintenanceSummaryDetails = mongoose.model('maintenance_summary_details', maintenanceSummaryDetailsSchema);

module.exports = MaintenanceSummaryDetails;
