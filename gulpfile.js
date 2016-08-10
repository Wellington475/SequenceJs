var gulp   = require('gulp');
var clean  = require('gulp-clean');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('clean', function(){
	return gulp.src('dist/')
			   .pipe(clean());
});


gulp.task('uglify', ['clean'], function(){
	return gulp.src('sequence.js')
			   .pipe(uglify())
			   .pipe(concat('sequence.min.js'))
			   .pipe(gulp.dest('dist'));
});

gulp.task('default', ['uglify']);