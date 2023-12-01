const Student = require('../models/student');

async function createStudent(studentData) {
  try {
    const newStudent = await Student.create(studentData);
    return newStudent;
  } catch (err) {
    console.error(err);
    throw new Error('Could not create student');
  }
}


async function addSubjectToStudent(studentId, subjectId) {
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      throw new Error('Student not found');
    }

    if (!student.subjectsEnrolled.includes(subjectId)) {
      student.subjectsEnrolled.push(subjectId);
      await student.save();
    }

    return student;
  } catch (err) {
    console.error(err);
    throw new Error('Could not add subject to student');
  }
}

module.exports = { createStudent, addSubjectToStudent };
