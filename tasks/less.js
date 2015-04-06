'use strict';
var less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	pixrem = require('gulp-pixrem'),
	combiner = require('stream-combiner2'),
	minifyCSS = require('gulp-minify-css');

module.exports = function(gulp) {
	var LESS_DIR = 'stylesheets';
	var COMPILED_DIR = 'dist/styles'
	gulp.task('less', function() {
		var combined = combiner.obj([
			gulp.src([
				LESS_DIR + '/main.less'
			]),
			less({
				paths: LESS_DIR
			}),
			autoprefixer('last 2 version', 'ie >= 8'),
			pixrem(),
			gulp.dest( COMPILED_DIR ),
			livereload()
		]);
		
		combined.on('error', console.error.bind(console));
		return combined;
	});
};