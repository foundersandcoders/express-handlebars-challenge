var test = require('tape');
var request = require('supertest');

var app = require('./app.js');

test('All routes should return the expected results', t => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /text/)
        .expect(res => {
            console.log(res.body);
        })
        .end((err, res) => {
            t.same(res.statusCode, 200, 'Status code is 200');
            t.error(err, 'No error');
            t.end();
        });
});

test('All routes should return the expected results', t => {
    request(app)
        .get('/s')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => {
            console.log(res.body);
        })
        .end((err, res) => {
            t.same(res.statusCode, 200, 'Status code is 200');
            t.error(err, 'No error');
            t.end();
        });
});
