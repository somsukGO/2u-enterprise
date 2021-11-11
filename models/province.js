const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provinceSchema = Schema(
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
  },
  { timestamps: true }
);

const Province = mongoose.model('province', provinceSchema);

module.exports = Province;
