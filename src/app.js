const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.status(200).send('first');
});

app.get('/s', (req, res) => {
    res.status(200).json({ name: 'second' });
});

module.exports = app;
