'use strict';
var livereload = require('gulp-livereload');

module.exports = function(gulp) {
	// Configs
	var BASE_DIR = 'public',
		STYLES_DIR = 'stylesheets',
		SRC_DIR = 'src';

	gulp.task('watch', function() {
		livereload.listen();
		gulp.watch(STYLES_DIR + '/**/*.less', ['less']);
		gulp.watch([SRC_DIR + '/**/*.html']).on('change', livereload.changed);
		gulp.watch([
			SRC_DIR + '/**/*.js'
		], ['transpile', 'browserify']);
	});
};