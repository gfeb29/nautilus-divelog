const { model, Schema } = require('mongoose');

const immersionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: String,
  time: String,
  maxDepth: Number,
  duration: Number,
  minimalTemperature: Number,
  immersionNumber: Number,
  depthsByTime: Object

});

module.exports = model('Immersion', immersionSchema);
