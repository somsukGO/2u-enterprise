const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maTypeDetailsSchema = new Schema(
  {
    maintenance: {
      type: Schema.Types.ObjectId,
      ref: 'maintenances',
    },
    maintenance_type: {
      type: Schema.Types.ObjectId,
      ref: 'maintenance_types',
    },
    name: {
      type: String,
    },
    detail: {
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
const MaTypeDetails = mongoose.model('ma_type_details', maTypeDetailsSchema);

module.exports = MaTypeDetails;
