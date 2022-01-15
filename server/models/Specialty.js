const mongoose = require('mongoose');

const { Schema } = mongoose;

const specialtySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
});

const Specialty = mongoose.model('Specialty', specialtySchema);

module.exports = Specialty;
