const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const standardWeightsSchema = Schema(
  {
    wheel: {
      type: Number,
    },
    starting_weight: {
      type: Number,
    },
    ending_weight: {
      type: Number,
    },
    persent: {
      type: Number,
    },
    published_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

const StandardWeights = mongoose.model('standard_weights', standardWeightsSchema);

module.exports = StandardWeights;
