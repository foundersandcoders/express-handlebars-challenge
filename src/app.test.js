var test = require('tape');
var request = require('supertest');

var app = require('./app.js');

test('GET /', assert => {
    request(app)
        .get('/')
        .expect(200) // .expect('Content-Type', /json/)
        .end((err, res) => {
            var expectedThings = 'Hellow';
            var actualThings = res.body;

            //   assert.error(err, 'No error');
            //   assert.same(actualThings, expectedThings, 'Retrieve list of things');
            assert.end();
        });
});
