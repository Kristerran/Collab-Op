const mongoose = require('mongoose');

const { Schema } = mongoose;

const postingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
  }
});

const Posting = mongoose.model('Posting', postingSchema);

module.exports = Posting;
