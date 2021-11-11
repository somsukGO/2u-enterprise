const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentsSchema = new Schema(
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
const Departments = mongoose.model('departments', departmentsSchema);

module.exports = Departments;
