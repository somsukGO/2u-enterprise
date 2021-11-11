const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doccodesSchema = new Schema(
  {
    code: {
      type: String,
    },
    no: {
      type: Number,
    },
    date: {
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
const Doccodes = mongoose.model('doccodes', doccodesSchema);

module.exports = Doccodes;
