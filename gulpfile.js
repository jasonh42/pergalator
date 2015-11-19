var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

// Default
// =====================================

gulp.task('default', ['build', 'dev-server'], function() {});

gulp.task('clean', function() {
    gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('dev-server', function() {
    var express = require('express');
    var app = express();

    app.use(express.static(__dirname + '/build'));
    var server = app.listen(3000, function() {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });
});

// Clean
// =====================================

gulp.task('clean', function() {
    gulp.src('build', {read: false}).pipe(clean());
});

// Build
// =====================================

gulp.task('build', ['copy', 'webpack:build'], function() {});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('webpack:build', function(callback) {
  var started = false;
  // Modify some webpack config options
  var myConfig = Object.create(webpackConfig);

  function bundle(err, stats) {
    if (err) {
        throw new gutil.PluginError('webpack:build', err);
    }

    gutil.log('[webpack:build]', stats.toString({
        colors: true
    }));

    if (!started) {
      started = true;
      return callback();
    }
  }

  // Run webpack
  var bundler = webpack(myConfig, bundle);
  bundler.watch(200, bundle);
});
