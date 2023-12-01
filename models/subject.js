const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  lecturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecturer',
  },
  studentsEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  }],
});

module.exports = mongoose.model('Subject', subjectSchema);
