'use strict';

var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

function gulpResize() {
    return gulp.src('images/*.*')
        .pipe(imageResize({
            width: 1024,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/fulls'))
        .pipe(imageResize({
            width: 512,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/thumbs'));
}
gulp.task(gulpResize) ;

function gulpDelResize() {
    return del(['images/*.*']);
}
gulp.task(gulpDelResize);

// compile scss to css
function gulpSass() {
    return gulp.src('./assets/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({basename: 'main.min'}))
        .pipe(gulp.dest('./assets/css'));
}
gulp.task(gulpSass);

// watch changes in scss files and run sass task
function gulpSassWatch() {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
}
gulp.task(gulpSassWatch);

// minify js
function minifyJS() {
    return gulp.src('./assets/js/main.js')
        .pipe(uglify())
        .pipe(rename({basename: 'main.min'}))
        .pipe(gulp.dest('./assets/js'));
}
gulp.task(minifyJS);

// default task
gulp.task('start', gulp.series(gulpResize, gulpDelResize));
// scss compile task
gulp.task('compile-sass', gulp.series(gulpSass, minifyJS));