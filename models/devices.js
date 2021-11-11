const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const devicesSchema = new Schema(
  {
    no: {
      type: String,
    },
    imei: {
      type: String,
    },
    sn: {
      type: String,
    },
    sim: {
      type: String,
    },
    model: {
      type: String,
    },
    dateInSystem: {
      type: Date,
    },
    isActive: {
      type: Boolean,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
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
const Devices = mongoose.model('devices', devicesSchema);

module.exports = Devices;
