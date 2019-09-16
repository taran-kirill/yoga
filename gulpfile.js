'use strict';

/*-------------Подключение----------- 
-----------------модулей-------------*/
var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');
/*--------------------------------------*/

gulp.task('css', function () {
  gulp.src('./app/css/*.css')
});


/*--work with Sass--*/
 gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
      ],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(gulp.dest('app/css'));
});

 /*--shadowing --*/
gulp.task('watch', function () {
  gulp.watch(['app/sass/**/*.scss'], ['sass']);
  gulp.watch(['app/css/**/*.css'], ['css']);
});

gulp.task('default', ['watch']);
