const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleExpenseSchema = new Schema(
  {
    no: {
      type: String,
    },
    remark: {
      type: String,
    },
    price: {
      type: Number,
    },
    expenses_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'expenses-types',
    },
    vehicle: {
      type: String,
    },
    published_at: {
      type: Date,
    },
  },
  { timestamps: true }
);
const VehicleExpense = mongoose.model('vehicle-expense', vehicleExpenseSchema);

module.exports = VehicleExpense;
