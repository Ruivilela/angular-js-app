// Karma configuration
// Generated on Sat Jul 01 2017 16:55:50 GMT+0200 (CEST)
const path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'client/spec/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    webpack: {
      entry: './client/app/app.module.js',
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [
                  path.join(__dirname, 'client/app'),
                  path.join(__dirname, 'client/spec')
                ]
            },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: "style!css" }
          ]
      }
    },

    // plugins: [
    //   require("karma-browserify"),
    //   require("karma-babel-preprocessor"),
    //   require("karma-jasmine"),
    //   require("karma-chai"),
    //   require("karma-chrome-launcher"),
    //   require("karma-mocha"),
    //   require("karma-mocha-reporter"),
    //   require("karma-sourcemap-loader"),
    //   require("karma-webpack")
    // ],


    // // preprocess matching files before serving them to the browser
    // // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },
    //
    // webpack: {
    //   devtool: 'inline-source-map',
    //   module: {
    //     loaders: [
    //       { test: /\.js/, exclude: [/app\/lib/, /node_modules/], loader: 'babel-loader' },
    //       { test: /\.html/, loader: 'raw' },
    //       { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    //       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    //       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
    //       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    //       { test: /\.(sass|scss)$/, loader: 'style!css!sass?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')},
    //       { test: /\.css$/, loader: 'style!css' }
    //     ]
    //   }
    // },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    preprocessors: {
      'client/app/**/*.js': ["webpack", "sourcemap"],
      'client/spec/**/*.js': ["webpack", "sourcemap"]
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // the default configuration
    htmlReporter: {
      outputDir: 'karma_html', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'report-summary-filename', // report summary filename; browser info by default


      // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },



    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      captureConsole: true
    }

  })
}
