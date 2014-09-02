'use strict';

var should = require('should'); //jshint ignore:line
var path = require('path');
var fs = require('fs');

var reporter = require('../lib/index');

var config = {
  outputFile: path.resolve(__dirname, 'result.html')
};

var reporterObject = reporter(config);

describe('jsHint HTML Reporter', function() {
  it('Should return a function', function() {
    reporter.should.be.type('function');
  });

  it('Should return an object', function() {
    reporterObject.should.be.type('object');
  });

  it('Should have a method reporter', function() {
    reporterObject.reporter.should.be.type('function');
  });

  it('Should output results', function() {
    reporterObject.reporter({});
  });

  it('Should remove the file', function() {
    fs.unlinkSync(path.resolve(__dirname, 'result.html'));
  });
});
