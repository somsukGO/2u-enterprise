const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const freightsSchema = new Schema(
  {
    vehicle_type: {
      type: Schema.Types.ObjectId,
      ref: 'vehicle_types',
    },
    wheel: {
      type: Number,
    },
    distance: {
      type: Number,
    },
    oilprices: {
      type: [Schema.Types.ObjectId],
      ref: 'oilprices',
    },
    distanceEnd: {
      type: Number,
    },
    name: {
      type: String,
    },
    weight: {
      type: Number,
    },
    job_types: {
      type: [Schema.Types.ObjectId],
      ref: 'job_types',
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
const Freights = mongoose.model('freights', freightsSchema);

module.exports = Freights;
