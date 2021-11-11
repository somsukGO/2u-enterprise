const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expensesTypesSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);
const ExpensesTypes = mongoose.model('expenses-types', expensesTypesSchema);

module.exports = ExpensesTypes;
