const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');


router.post('/', async (req, res, next) => {
    try {
      const newSubject = await subjectController.createSubject(req.body);
      res.status(201).json(newSubject);
    } catch (err) {
      next(err); 
    }
  });

  router.get('/:subjectId', async (req, res, next) => {
    const { subjectId } = req.params;
    try {
      const subject= await subjectController.getSubjectById(subjectId);
      res.status(200).json(subject);
    } catch (err) {
      next(err);
    }
  });

  router.get('/', async (req, res, next) => {
    try {
      const subject= await subjectController.getSubjectsWithLecturers();
      res.status(200).json(subject);
    } catch (err) {
      next(err);
    }
  });

  router.get('/student/:studentId', async (req, res, next) => {
    const { studentId } = req.params;
    try {
      const subjectsForStudent = await subjectController.getSubjectsByStudentId(studentId);
      res.status(200).json(subjectsForStudent);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
