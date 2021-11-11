const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleTypesSchema = Schema(
  {
    name: {
      type: String,
    },
    published_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

const VehicleTypes = mongoose.model('vehicle-types', vehicleTypesSchema);

module.exports = VehicleTypes;
