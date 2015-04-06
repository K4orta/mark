'use strict';
var babel = require('gulp-babel'),
	react = require('gulp-react');

var browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      gutil = require('gulp-util'),
      uglify = require('gulp-uglify');


module.exports = function(gulp) {
	gulp.task('transpile', function(cb) {
		gulp.src(['src/**/*.js'])
		.pipe(babel({stage: 0}))
		.pipe(react())
		.pipe(gulp.dest('lib/'))
		.on("end", function() {
			cb(null);
		});
	});
};