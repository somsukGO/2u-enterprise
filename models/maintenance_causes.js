const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceCausesSchema = new Schema(
  {
    name: {
      type: String,
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
const Maintenance = mongoose.model('maintenance_causes', maintenanceCausesSchema);

module.exports = Maintenance;
