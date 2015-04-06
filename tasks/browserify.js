'use strict';
module.exports = function(gulp) {
  var browserify = require('browserify'),
      watchify = require('watchify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      gutil = require('gulp-util'),
      uglify = require('gulp-uglify'),
      livereload = require('gulp-livereload');

    var bundler = watchify(browserify(['./lib/scripts/main.js'], watchify.args));
    
    var bundle = function() {
      return bundler
        .bundle()
        .pipe(source('main.js'))
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(gulp.dest('./dist/scripts/'))
        .pipe(livereload());
    };

    bundler.on('update', bundle);
    
    gulp.task('browserify', ['transpile'], bundle);
    
    gulp.task('browserify-prd', ['transpile'], function() {
      browserify(['./lib/scripts/main.js'])
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(gulp.dest('./dist/scripts/'));
    });

};