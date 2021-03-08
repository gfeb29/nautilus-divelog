const { model, Schema } = require('mongoose');

const dataSchema = new Schema({
  // 0:0
  // en Mongo los valores aparecen como numericos y string??

  time: Number
});

module.exports = model('DiveLog', dataSchema);
