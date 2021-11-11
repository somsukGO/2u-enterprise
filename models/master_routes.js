const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Stations = require('../models/stations');

const masterRoutesSchema = new Schema(
  {
    name: {
      type: String,
    },
    cost: {
      type: Number,
    },
    stations: {
      type: [Schema.Types.ObjectId],
      ref: 'stations',
    },
    distance: {
      type: Number,
    },
    isActive: {
      type: Boolean,
    },
    no: {
      type: String,
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
const MasterRoute = mongoose.model('master_routes', masterRoutesSchema);

module.exports = MasterRoute;
