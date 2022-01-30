const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User')
const Posting = require('./Posting')
const specialtySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // users: [User.schema],
  // postings: [Posting.schema]
});

const Specialty = mongoose.model('Specialty', specialtySchema);

module.exports = Specialty;
