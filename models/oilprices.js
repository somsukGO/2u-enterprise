const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oilpricesSchema = new Schema(
  {
    price: {
      type: Number,
    },
    rateStart: {
      type: Number,
    },
    rateEnd: {
      type: Number,
    },
    freight: {
      type: Schema.Types.ObjectId,
      ref: 'freights',
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
const Oilprices = mongoose.model('oilprices', oilpricesSchema);

module.exports = Oilprices;
