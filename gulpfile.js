var gulp = require("gulp");
var webpack = require('webpack');
var utility = require('gulp-util');
var runner = require('gulp-run');
var webpackConfig = require('./webpack.config.js');

var path = {
    nodeRoot: './node_modules/',
    JsRoot: './Scripts/',
    CssRoot: './Css/',
    FontRoot: './Font/'
};

gulp.task('moveJsFiles', function() {
    return gulp.src([
            path.nodeRoot + 'es5-shim/*.js',
            path.nodeRoot + 'object-assign/index.js',
            path.nodeRoot + 'jquery/dist/*.js',
            path.nodeRoot + 'bootstrap/dist/js/bootstrap.js',
            path.nodeRoot + 'react/dist/*.js',
            path.nodeRoot + 'react-dom/dist/*.js',
            path.nodeRoot + 'react-redux/dist/*.js',
            path.nodeRoot + 'react-router/umd/*.js',
            path.nodeRoot + 'redux/dist/*.js',
            path.nodeRoot + 'redux-thunk/dist/*.js',
            path.nodeRoot + 'toastr/build/*.js',
            path.nodeRoot + 'es6-promise/dist/*.js',
            path.nodeRoot + 'whatwg-fetch/fetch.js',
            path.nodeRoot + 'babel-polyfill/dist/*.js',
            path.nodeRoot + 'jquery-validation/dist/*.js',
            path.nodeRoot + 'jquery-validation-unobtrusive/jquery.validation.unobtrusive.js',
            path.nodeRoot + 'mocha/mocha.js',
            path.nodeRoot + 'chai/chai.js'
        ], { base: path.nodeRoot })
        .pipe(gulp.dest(path.JsRoot + 'vendors/'));
});

gulp.task('moveCssFiles', function() {
    return gulp.src([
            path.nodeRoot + 'bootstrap/dist/css/bootstrap.css',
            path.nodeRoot + 'font-awesome/css/font-awesome.css',
            path.nodeRoot + 'toastr/build/*.css',
            path.nodeRoot + 'mocha/mocha.css'
        ], { base: path.nodeRoot })
        .pipe(gulp.dest(path.CssRoot));
});

gulp.task('moveFontsFiles', function() {
    return gulp.src([
            path.nodeRoot + 'bootstrap/dist/fonts/*.{eot,svg,ttf,woff,woff2}',
            path.nodeRoot + 'font-awesome/fonts/*.{otf,eot,svg,ttf,woff,woff2}'
        ], { base: path.nodeRoot })
        .pipe(gulp.dest(path.FontRoot));
});

gulp.task("compile:js", function(callback) {
    var myConfig = Object.create(webpackConfig);

    runner('set NODE_ENV=production').exec();

    webpack(myConfig, function(err, stats) {
        if (err) throw new utility.PluginError("webpack:build", err);
        utility.log("[webpack:build]", stats.toString({
            colors: true
        }));
    });

    return gulp.src(['./build/app.js'])
        .pipe(gulp.dest("../BackEnd/React_Jwt/Build"));
});

gulp.task('test', require('gulp-jsx-coverage').createTask({
    src: ['test/**/*.js'], // will pass to gulp.src as mocha tests 
    isparta: false, // use istanbul as default 
    istanbul: { // will pass to istanbul or isparta 
        preserveComments: true, // required for istanbul 0.4.0+ 
        coverageVariable: '__MY_TEST_COVERAGE__',
        exclude: /node_modules|test/ // do not instrument these files 
    },

    threshold: [ // fail the task when coverage lower than one of this array 
        {
            type: 'lines', // one of 'lines', 'statements', 'functions', 'banches' 
            min: 85
        }
    ],

    transpile: { // this is default whitelist/blacklist for transpilers 
        babel: {
            include: /\.jsx?$/,
            exclude: /node_modules/,
            omitExt: false // if you wanna omit file ext when require(), put an array 
        } // of file exts here. Ex: ['.jsx', '.es6'] (NOT RECOMMENDED)
    },
    coverage: {
        reporters: ['text-summary', 'json', 'lcov'], // list of istanbul reporters 
        directory: 'coverage' // will pass to istanbul reporters 
    },
    mocha: { // will pass to mocha 
        reporter: 'spec'
    },

    //optional 
    cleanup: function() {
        // do extra tasks after test done 
        // EX: clean global.window when test with jsdom 
    }
}));