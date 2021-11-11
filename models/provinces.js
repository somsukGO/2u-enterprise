const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provincesSchema = Schema(
  {
    laoName: {
      type: String,
    },
    ENname: {
      type: String,
    },
    districts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'districts',
    },
    published_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Provinces = mongoose.model('provinces', provincesSchema);

module.exports = Provinces;
