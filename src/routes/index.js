const express = require('express');

const userListFromDatabase = require('./../model');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { users: userListFromDatabase });
});

module.exports = router;
