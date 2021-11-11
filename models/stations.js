const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationsSchema = Schema(
  {
    isActive: {
      type: Boolean,
    },
    published_at: {
      type: Date,
    },
    tel: {
      type: String,
    },
    contact: {
      type: String,
    },
    radian: {
      type: Number,
    },
    Coordinates: {
      lat: {
        type: String,
      },
      lng: {
        type: String,
      },
    },
    no: {
      type: String,
    },
    name: {
      type: String,
    },
    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'districts',
    },
    partner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'partners',
    },
    province: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'provinces',
    },
    station_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'station_types',
    },
  },
  { timestamps: true }
);

const Stations = mongoose.model('stations', stationsSchema);

module.exports = Stations;
