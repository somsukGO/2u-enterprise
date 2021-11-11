const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationInJobsSchema = Schema(
  {
    amount: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'jobs',
    },
    station: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'stations',
    },
  },
  { timestamps: true }
);

const StationInJobs = mongoose.model('station_in_jobs', stationInJobsSchema);

module.exports = StationInJobs;
