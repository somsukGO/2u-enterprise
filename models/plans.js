const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plansPaginate = require('mongoose-paginate-v2');

const plansSchema = new Schema(
  {
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: 'jobs',
    },
    craete_by: {
      type: String,
    },
    no: {
      type: String,
    },
    employee2: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
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

plansSchema.plugin(plansPaginate);

const Plans = mongoose.model('plans', plansSchema);

module.exports = Plans;
