const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ data: 'router' });
});

module.exports = router;
