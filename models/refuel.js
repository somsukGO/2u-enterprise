const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const refuelsPaginate = require('mongoose-paginate-v2');

const refuelsSchema = new Schema(
  {
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
      required: true,
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
      required: true,
    },
    petroleumType: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    currentMileage: {
      type: Number,
      required: true,
    },
    billImage: {
      type: String,
      required: true,
    },
    mileageImage: {
      type: String,
      required: true,
    },
    priceImage: {
      type: String,
      required: true,
    },
    vehicleLicensePlate: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

refuelsSchema.plugin(refuelsPaginate);

const Refuels = mongoose.model('refuels', refuelsSchema);

module.exports = Refuels;
