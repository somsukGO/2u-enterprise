const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobInsSchema = new Schema(
  {
    job: {
      type: Schema.Types.ObjectId,
      ref: 'jobs',
    },
    users: {
      type: Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    master_route: {
      type: Schema.Types.ObjectId,
      ref: 'master_routes',
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
    },
    station_ins: {
      type: [Schema.Types.ObjectId],
      ref: 'station_ins',
    },
    distance: {
      type: Number,
    },
    start_time: {
      type: Date,
    },
    time_to_factory: {
      type: String,
    },
    time_leave_factory: {
      type: String,
    },
    first_point: {
      type: Date,
    },
    back_to_factory: {
      type: Date,
    },
    GPS_distance: {
      type: Number,
    },
    employee2: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
    },
    start_kilometer: {
      type: Number,
    },
    end_kilometer: {
      type: Number,
    },
    total_weight: {
      type: Number,
    },
    wheel: {
      type: Number,
    },
    percent_weight: {
      type: Number,
    },
    toll_fees: {
      type: Number,
    },
    overnight: {
      type: Number,
    },
    parking_fees: {
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
const JobIns = mongoose.model('job_ins', jobInsSchema);

module.exports = JobIns;
