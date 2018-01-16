"use strict";
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');


gulp.task('sass', function () {
  	gulp.src('./src/scss/main.scss')
    .pipe(sass.sync({outputStyle: 'extended'}).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        "browsers":[
            "ie >= 9",
            "last 4 Edge versions",
            "last 4 ff versions",
            "last 4 Chrome versions",
            "last 4 Opera versions",
            "last 4 Safari versions",
            "ie_mob >= 10",
            "iOS >= 8",
            "android >= 4.4",
            "bb >= 10"
        ]
    }))
    // .pipe(cssnano({zindex: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copyHTML', function(){
	gulp.src('./src/template/*.html')
	.pipe(gulp.dest('dist/template'));
});

gulp.task('watch', function(){
	gulp.watch('./src/scss/**/*.scss', ['sass']);
	gulp.watch('./src/template/*.html', ['copyHTML']);
});