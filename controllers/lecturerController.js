const Lecturer = require('../models/lecturer');

async function createLecturer(lecturerData) {
  try {
    const newLecturer = await Lecturer.create(lecturerData);
    return newLecturer;
  } catch (err) {
    console.error(err);
    throw new Error('Could not create lecturer');
  }
}

async function addSubjectToLecturer(lecturerId, subjectId) {
  try {
    const lecturer = await Lecturer.findById(lecturerId);
    if (!lecturer) {
      throw new Error('Lecturer not found');
    }

    if (!lecturer.subjectsTaught.includes(subjectId)) {
      lecturer.subjectsTaught.push(subjectId);
      await lecturer.save();
    }

    return lecturer;
  } catch (err) {
    console.error(err);
    throw new Error('Could not add subject to lecturer');
  }
}

module.exports = { createLecturer, addSubjectToLecturer };
