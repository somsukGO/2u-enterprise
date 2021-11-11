const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleGroupsSchema = Schema(
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

const VehicleGroups = mongoose.model('vechicle_groups', vehicleGroupsSchema);

module.exports = VehicleGroups;
