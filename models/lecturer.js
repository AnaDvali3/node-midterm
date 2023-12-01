const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subjectsTaught: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
  }],
});

module.exports = mongoose.model('Lecturer', lecturerSchema);
