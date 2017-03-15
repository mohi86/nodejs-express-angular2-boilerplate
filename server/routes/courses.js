const express = require('express');
const router = express.Router();

/* GET courses. */
router.get('/', (req, res) => {
  res.send({ courses: 'Course Api - getting all courses'})
});

module.exports = router;
