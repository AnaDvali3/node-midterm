const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', async (req, res, next) => {
    try {
      const newStudent = await studentController.createStudent(req.body);
      res.status(201).json(newStudent);
    } catch (err) {
      next(err); 
    }
  });

  router.post('/:studentId/addSubject/:subjectId', async (req, res, next) => {
    const { studentId, subjectId } = req.params;
    try {
      const updatedStudent = await studentController.addSubjectToStudent(studentId, subjectId);
      res.status(200).json(updatedStudent);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;