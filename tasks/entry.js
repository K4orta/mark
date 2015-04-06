'use strict';

var React = require('react'); 
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');

module.exports = function(gulp) {
	gulp.task('entry', function() {
		var app = require('../lib/components/layout.js');
		var rendered = React.renderToString(React.createElement(app));

		var str = require('stream').Readable({ objectMode: true });
		str._read = function() {
			this.push(new gutil.File({
				cwd: '',
				base: '',
				path: 'index.html',
				contents: new Buffer(rendered)
			}));
			this.push(null);
		};

		str
			.pipe(gulp.dest('dist/'))
			.pipe(livereload());
	});
};