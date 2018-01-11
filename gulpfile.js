const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  	gulp.src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
	gulp.watch('./src/scss/*.scss', ['sass']);
});