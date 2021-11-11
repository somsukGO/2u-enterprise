const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getPosSchema = new Schema(
  {
    no: {
      type: String,
    },
    IV_NO: {
      type: String,
    },
    date: {
      type: Date,
    },
    po: {
      type: String,
    },
    users: {
      type: Schema.Types.ObjectId,
      ref: 'users_permissions_user',
    },
    completely: {
      type: Boolean,
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
const GetPos = mongoose.model('get_pos', getPosSchema);

module.exports = GetPos;
