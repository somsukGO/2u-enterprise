const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mAintenanceSummariesSchema = new Schema(
  {
    maintenance: {
      type: Schema.Types.ObjectId,
      ref: 'maintenances',
    },
    maintenance_cause: {
      type: Schema.Types.ObjectId,
      ref: 'maintenance_causes',
    },
    vehicle_type: {
      type: Schema.Types.ObjectId,
      ref: 'vehicle_types',
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
    },
    MAdate: {
      type: Date,
    },
    date_of_completion: {
      type: Date,
    },
    number_of_days: {
      type: Number,
    },
    maintenance_summary_details: {
      type: [Schema.Types.ObjectId],
      ref: 'maintenance_summary_details',
    },
    total_cost: {
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

const MAintenanceSummaries = mongoose.model('m_aintenance_summaries', mAintenanceSummariesSchema);

module.exports = MAintenanceSummaries;
