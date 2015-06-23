'use strict';

var assert = require('assert');
var fs = require('fs');
var gutil = require('gulp-util');
var PassThrough = require('stream').PassThrough;
var path = require('path');
var gulpCompass = require('gulp-compass');

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
