const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationInsSchema = Schema(
  {
    distance: {
      type: Number,
    },
    job_start: {
      type: Date,
    },
    job_done: {
      type: Date,
    },
    num_of_bill: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
    jobin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'job_ins',
    },
    station: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'stations',
    },
    transport_cost_summary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'transport_cost_summaries',
    },
  },
  { timestamps: true }
);

const StationIns = mongoose.model('station_ins', stationInsSchema);

module.exports = StationIns;
