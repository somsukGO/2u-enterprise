const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobPaginate = require('mongoose-paginate-v2');

const jobsSchema = new Schema(
  {
    no: {
      type: String,
    },
    date: {
      type: Date,
    },
    job_type: {
      type: Schema.Types.ObjectId,
      ref: 'job_types',
    },
    routes: {
      type: [Schema.Types.ObjectId],
      ref: 'routes',
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
    },
    orders: {
      type: [Schema.Types.ObjectId],
      ref: 'orders',
    },
    master_route: {
      type: Schema.Types.ObjectId,
      ref: 'master_routes',
    },
    amount: {
      type: Number,
    },
    vehicle_type: {
      type: Schema.Types.ObjectId,
      ref: 'vehicle_types',
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'partners',
    },
    status: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    create_by: {
      type: Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    job_in: {
      type: Schema.Types.ObjectId,
      ref: 'job_ins',
    },
    plan: {
      type: Schema.Types.ObjectId,
      ref: 'plans',
    },
    job_summary: {
      type: Schema.Types.ObjectId,
      ref: 'job_summarys',
    },
    station_in_jobs: {
      type: [Schema.Types.ObjectId],
      ref: 'station_in_jobs',
    },
    weight: {
      type: Number,
    },
    transportCostSummary: {
      type: Schema.Types.ObjectId,
      ref: 'transport_cost_summaries',
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

jobsSchema.plugin(jobPaginate);

const Jobs = mongoose.model('jobs', jobsSchema);

module.exports = Jobs;
