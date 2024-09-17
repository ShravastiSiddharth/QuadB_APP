const mongoose = require('mongoose');

const QuadbSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String
});

module.exports = mongoose.model('Quadb', QuadbSchema);
