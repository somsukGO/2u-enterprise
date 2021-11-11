const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportCostSummariesSchema = Schema(
  {
    wheel: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    distance: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'jobs',
    },
    job_in: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'job_ins',
    },
    master_route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'master_routes',
    },
    oilprice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'oilprices',
    },
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vehicles',
    },
  },
  { timestamps: true }
);

const TransportCostSummaries = mongoose.model(
  'transport_cost_summaries',
  transportCostSummariesSchema
);

module.exports = TransportCostSummaries;
