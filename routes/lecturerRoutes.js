const express = require('express');
const router = express.Router();
const lecturerController = require('../controllers/lecturerController');

router.post('/', async (req, res, next) => {
  try {
    const newLecturer = await lecturerController.createLecturer(req.body);
    res.status(201).json(newLecturer);
  } catch (err) {
    next(err); 
  }
});

router.post('/:lecturerId/addSubject/:subjectId', async (req, res, next) => {
  const { lecturerId, subjectId } = req.params;
  try {
    const updatedLecturer = await lecturerController.addSubjectToLecturer(lecturerId, subjectId);
    res.status(200).json(updatedLecturer);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
