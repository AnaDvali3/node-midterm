const express = require('express');
const subjectRoutes = require('./routes/subjectRoutes');
const lecturerRoutes = require('./routes/lecturerRoutes');
const studentRoutes = require('./routes/studentRoutes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/subjects', subjectRoutes);
app.use('/lecturers', lecturerRoutes);
app.use('/students', studentRoutes);

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something went wrong!');
})

module.exports = app;