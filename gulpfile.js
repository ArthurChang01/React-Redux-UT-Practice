var gulp = require("gulp");
var webpack = require('webpack');
var utility = require('gulp-util');
var webpackConfig = require('./webpack.config.js');

var path = {
    nodeRoot : './node_modules/',
    webroot : './Scripts/'
};

gulp.task('moveFiles',function(){
    return gulp.src([
        path.nodeRoot + 'es5-shim/*.js',
        path.nodeRoot + 'object-assign/index.js',
        path.nodeRoot + 'isomorphic-fetch/*.js',
        path.nodeRoot + 'jquery/dist/*.js',
        path.nodeRoot + 'react/dist/*.js',
        path.nodeRoot + 'react-dom/dist/*.js',
        path.nodeRoot + 'react-redux/dist/*.js',
        path.nodeRoot + 'react-router/umd/*.js',
        path.nodeRoot + 'redux/dist/*.js',
        path.nodeRoot + 'redux-thunk/dist/*.js'
    ],{base:path.nodeRoot})
    .pipe(gulp.dest(path.webroot+'vendors/'));
});

gulp.task("compile:js", function (callback) {
    var myConfig = Object.create(webpackConfig);

    webpack(myConfig, function (err, stats) {
        if (err) throw new utility.PluginError("webpack:build", err);
        utility.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});