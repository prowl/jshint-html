'use strict';

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var mkdirp = require('mkdirp');

var conf = null;

var reporterObj = {};

/**
 * Takes the results from jshint and compiles them into html output
 * @param {Object} results The jshint results
 * @param {config} the configuration object
 */
reporterObj.reporter = function reporter(results) {
  var outputFile = conf['outputFile'];

  var templateFile = path.resolve(__dirname, '../templates/template.html');

  var template = fs.readFileSync(templateFile, {encoding: 'UTF-8'});
  var compileTemplate = _.template(template);

  var data = {
    results: results
  };

  var html = compileTemplate(data);

  writeFile(html, outputFile);
};

/**
 * Writes the file to disk
 *
 * If the file exists it will be overwritten
 *
 * @param {String|Buffer} data The data to be written to the file
 * @param {String} fp The filepath to the file that will be written to
 */
function writeFile(data, fp) {
  // make sure the directory exists
  var dir = path.dirname(fp);
  mkdirp.sync(dir);

  fs.writeFileSync(fp, data);
}

/**
 * Initializes the reporter
 *
 * @param {Object} config The configuration options
 *
 * @return {Object} reporterObj The reporter object
 */
module.exports = function init(config) {
  conf = config;

  reporterObj.reporter({});

  return reporterObj;
};
