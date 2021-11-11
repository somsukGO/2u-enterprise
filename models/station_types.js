const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationTypesSchema = Schema(
  {
    name: {
      type: String,
    },
    published_at: {
      type: Date,
    },
    station_code: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'station_codes',
    },
  },
  { timestamps: true }
);

const StationTypes = mongoose.model('station_types', stationTypesSchema);

module.exports = StationTypes;
