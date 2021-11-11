const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeesSchema = new Schema(
  {
    name: {
      type: String,
    },
    tax: {
      type: String,
    },
    email: {
      type: String,
    },
    tel: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    workDatr: {
      type: Date,
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: 'departments',
    },
    no: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    expriDate: {
      type: Date,
    },
    status: {
      type: String,
    },
    driverLicenseType: {
      type: String,
    },
    driverLicenseExpired: {
      type: Date,
    },
    nickname: {
      type: String,
    },
    real_department: {
      type: Schema.Types.ObjectId,
      ref: 'real_departments',
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
const Employees = mongoose.model('employees', employeesSchema);

module.exports = Employees;
