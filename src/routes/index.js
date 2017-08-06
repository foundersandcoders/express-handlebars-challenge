const express = require('express');

const router = express.Router();

// list of users in your database
const userListFromDatabase = [
  { name: 'Noel', age: 17, language: 'Python' },
  { name: 'Farima', age: 21, language: 'JavaScript' },
  { name: 'Laia', age: 30, language: 'Elm' },
  { name: 'Sophia', age: 16, language: 'JavaScript' },
  { name: 'Nareh', age: 48, language: 'PHP' },
];

router.get('/', (req, res) => {
  res.render('home', { users: userListFromDatabase });
});

module.exports = router;
