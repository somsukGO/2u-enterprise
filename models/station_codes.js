const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationCodesSchema = Schema(
  {
    code: {
      type: String,
    },
    no: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
    station_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'station_types',
    },
  },
  { timestamps: true }
);

const StationCodes = mongoose.model('station_codes', stationCodesSchema);

module.exports = StationCodes;
