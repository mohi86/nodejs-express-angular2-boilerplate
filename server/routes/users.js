const express = require('express');
const router = express.Router();

/* GET users. */
router.get('/', (req, res) => {
  res.send({ courses: 'Users Api - authenticate and authorize - getting users info'})
});

module.exports = router;
