const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenancesSchema = new Schema(
  {
    no: {
      type: String,
    },
    name: {
      type: String,
    },
    note: {
      type: String,
    },
    kmMaintenance: {
      type: Number,
    },
    dateMaintenance: {
      type: Date,
    },
    tradeExpenses: {
      type: Number,
    },
    finishDate: {
      type: Date,
    },
    isActive: {
      type: Boolean,
    },
    status: {
      type: String,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'partner',
    },
    maintenance_type: {
      type: Schema.Types.ObjectId,
      ref: 'maintenance_types',
    },
    maintenance_cause: {
      type: Schema.Types.ObjectId,
      ref: 'maintenance_causes',
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'companies',
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
    },
    repair_notice_date: {
      type: Date,
    },
    km_number: {
      type: Number,
    },
    hr_work: {
      type: Number,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
    },
    number_of_days: {
      type: Number,
    },
    ma_type_details: {
      type: [Schema.Types.ObjectId],
      ref: 'ma_type_details',
    },
    vehicle_type: {
      type: Schema.Types.ObjectId,
      ref: 'vehicle_types',
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
const Maintenances = mongoose.model('maintenances', maintenancesSchema);

module.exports = Maintenances;
