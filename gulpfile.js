'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gulpCompass = require('gulp-compass');

gulp.task('mocha', function() {
    return gulp.src('test/main.js')
        .pipe(mocha());
});

gulp.task('test', ['compass'], function() {
    gulp.start('mocha');
});

gulp.task('compass', function() {

    // compile simple
    return gulp.src('test/fixture/icon-sprite/**/*.scss')
        .pipe(
        gulpCompass({
            project: __dirname + '/test',

            style: 'compressed',

            image: 'fixture',

            sass: 'fixture',

            css: 'tmp',

            generated_images_path: 'tmp'
        })
    );
});


gulp.task('default', ['test']);
