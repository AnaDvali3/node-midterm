const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subjectsEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
  }],
});

module.exports = mongoose.model('Student', studentSchema);
