const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehiclesSchema = Schema(
  {
    isActive: {
      type: Boolean,
    },
    vehicle_groups: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'vehicle_groups',
    },
    frontIMG: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'upload_file',
    },
    backIMG: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'upload_file',
    },
    leftIMG: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'upload_file',
    },
    rightIMG: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'upload_file',
    },
    published_at: {
      type: Date,
    },
    weightStandard: {
      type: Number,
    },
    wheel: {
      type: Number,
    },
    hrMantenance: {
      type: Number,
    },
    hrStart: {
      type: Number,
    },
    kmMantenance: {
      type: Number,
    },
    kmStart: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    voltage: {
      type: Number,
    },
    fuelTankNo: {
      type: String,
    },
    fuelTankSize: {
      type: Number,
    },
    fuel: {
      type: String,
    },
    standardEngin: {
      type: String,
    },
    enginNo: {
      type: String,
    },
    purchaseDate: {
      type: Date,
    },
    productYear: {
      type: Date,
    },
    color: {
      type: String,
    },
    model: {
      type: String,
    },
    IDGPS: {
      type: String,
    },
    province: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'provinces',
    },
    VehicleLicensePlateTail: {
      type: String,
    },
    VehicleLicensePlate: {
      type: String,
    },
    no: {
      type: String,
    },
    vehicle_brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vehicle_brands',
    },
    vehicle_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vehicle_types',
    },
    device: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'devices',
    },
  },
  { timestamps: true }
);

const Vehicles = mongoose.model('vehicles', vehiclesSchema);

module.exports = Vehicles;
