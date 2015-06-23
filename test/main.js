'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');

describe('responsive-compass-sprite', function() {
    describe('icon-sprite', function() {

        function compare(expected, tmp, done) {

            var baseExpected = __dirname + '/expected/icon-sprite',
                baseTmp = __dirname + '/tmp/icon-sprite';

            if(typeof tmp === 'function') {
                done = tmp;
                tmp = expected;
            }
            assert.equal(fs.readFileSync(baseExpected + '/' + expected, 'utf-8'), fs.readFileSync(baseTmp + '/' + tmp, 'utf-8'));
            done();
        };

        it('simple test', function(done) {
            compare('simple.css', done);
        });

        it('renderAll test', function(done) {
            compare('renderAllSprites.css', done);
        });
    });
});
