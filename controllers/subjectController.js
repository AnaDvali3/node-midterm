const Subject = require('../models/subject');

async function createSubject(subjectData) {
  try {
    const newSubject = await Subject.create(subjectData);
    return newSubject;
  } catch (err) {
    console.error(err);
    throw new Error('Could not create subject');
  }
}

async function getSubjectById(subjectId) {
  try {
    const subject = await Subject.findById(subjectId)
    .populate('lecturer')
    .populate('studentsEnrolled');

    if (!subject) {
      throw new Error('Subject not found');
    }
    return subject;
  } catch (err) {
    console.error(err);
    throw new Error('Could not fetch subject with lecturer');
  }
}

async function getSubjectsWithLecturers() {
  try {
    const subjectsWithLecturers = await Subject.find().populate('lecturer');
    return subjectsWithLecturers;
  } catch (err) {
    console.error(err);
    throw new Error('Could not fetch subjects with lecturers');
  }
}

async function getSubjectsByStudentId(studentId) {
  try {
    const subjects = await Subject.find({ studentsEnrolled: studentId });
    return subjects;
  } catch (err) {
    console.error(err);
    throw new Error('Could not fetch subjects by student ID');
  }
}

module.exports = { createSubject, getSubjectById, getSubjectsWithLecturers, getSubjectsByStudentId };
