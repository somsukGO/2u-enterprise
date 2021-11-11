const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportCostReportsSchema = Schema(
  {
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    start_rate: {
      type: Number,
    },
    end_rate: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
    job_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'job_types',
    },
    partner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'partners',
    },
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    vehicle_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vehicle_types',
    },
  },
  { timestamps: true }
);

const TransportCostReports = mongoose.model('transport_cost_reports', transportCostReportsSchema);

module.exports = TransportCostReports;
