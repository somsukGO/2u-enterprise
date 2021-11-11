const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleBrandsSchema = Schema(
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

const VehicleBrands = mongoose.model('vechicle_brands', vehicleBrandsSchema);

module.exports = VehicleBrands;
