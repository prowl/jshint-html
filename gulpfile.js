'use strict';

var gulp = require('gulp');

var paths = {
  root: __dirname,
  soften: ['**/*.js', '**/*.json', '!./node_modules/**'],
  src: ['**/*.js', '!./node_modules/**'],
  specs: ['specs/**/*.js'],
  statements_threshold: 90,
  functions_threshold: 100,
  branches_threshold: 100,
  lines_threshold: 80
};

require('gulp-module')(gulp, paths);
