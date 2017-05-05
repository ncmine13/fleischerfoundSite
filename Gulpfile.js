var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');


gulp.task('compile-less', function(){
	gulp.src('./styles/styles.less')
	.pipe(less())
	.pipe(gulp.dest('./styles'))
})

gulp.task('watch', function(){
	gulp.watch(['./styles/styles.less'], ['compile-less'])
})

gulp.task('default', ['watch', 'compile-less'])
