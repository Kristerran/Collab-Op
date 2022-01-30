const mongoose = require('mongoose');

const { Schema } = mongoose;

const postingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  collaborators: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }],
  seeking: [{
    type: Schema.Types.ObjectId,
    ref: 'Specialty'
  }]

});

const Posting = mongoose.model('Posting', postingSchema);

module.exports = Posting;
