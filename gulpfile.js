var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

// Default
// =====================================

gulp.task('default', ['build', 'webpack-dev-server'], function() {});

gulp.task('webpack-dev-server', function() {
    new WebpackDevServer(webpack(webpackConfig), {
        contentBase: 'dist/index.html',
        publicPath: '/' + webpackConfig.output.publicPath
    }).listen(8080, 'localhost', function(err) {
        if (err) {
            throw new gutil.PluginError('pergalator', err);
        }

        gutil.log('[pergalator]', 'http://localhost:8080/pergalator/');
    });
});

// Clean
// =====================================

gulp.task('clean', function() {
    gulp.src('build', {read: false})
        .pipe(clean());
});

// Build
// =====================================

gulp.task('build', ['copy', 'webpack:build'], function() {});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('webpack:build', function(callback) {
    // Modify some webpack config options
    var myConfig = Object.create(webpackConfig);

    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        sourceMap: false,
    //        mangle: false
    //    })
    //],

    // Run webpack
    webpack(myConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }

        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));

        callback();
    });
});