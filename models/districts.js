const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtsSchema = new Schema(
  {
    laoName: {
      type: String,
    },
    ENname: {
      type: String,
    },
    province: {
      type: Schema.Types.ObjectId,
      ref: 'provinces',
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
const Districts = mongoose.model('districts', districtsSchema);

module.exports = Districts;
