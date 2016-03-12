'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gulpCompass = require('gulp-compass');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var opn = require('opn');

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


gulp.task('dev', ['cpLib', 'cpAll', 'buildCompass', 'server'], function() {

});

gulp.task('clean', function() {

    return gulp.src('demo/dist', { read: false })
        .pipe(clean());
});

gulp.task('buildCompass', ['clean', 'cpLib', 'cpAll'], function() {

    return gulp.src(__dirname + '/demo/dist/**/*.scss')
        .pipe( gulpCompass({
            project: __dirname + '/demo/dist',
            style: 'expanded',
            image: 'themes',
            sass: 'themes',
            relative: false,
            css: __dirname + '/demo/dist/themes/css'
        }))
            .pipe(gulp.dest('local/themes/default'));
});

gulp.task('cpLib', ['clean'], function() {
    return gulp.src('utils.scss')
    .pipe(rename('_utils.scss'))
    .pipe(gulp.dest('./demo/src/themes/lib'));
});

gulp.task('cpAll', ['cpLib', 'clean'], function() {

    return gulp.src('demo/src/**')
    .pipe(gulp.dest('demo/dist'));

});
gulp.task('server', function() {

    connect.server({
        root: 'demo/dist',
        port: 8080
    });
    opn('http://localhost:8080/index.html');

});

gulp.task('default', ['dev']);
