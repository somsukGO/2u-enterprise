const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const realDepartmentsSchema = Schema(
  {
    name: {
      type: String,
    },
    published_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

const RealDepartments = mongoose.model('real_departments', realDepartmentsSchema);

module.exports = RealDepartments;
