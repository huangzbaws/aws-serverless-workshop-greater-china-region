'use strict';

// tests for currentTime
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('currentTime', '/handler.js', 'endpoint');

describe('currentTime', () => {
  before((done) => {
    done();
  });

  it('Lambda Unit Test in Codebuild', () => {
    return wrapped.run({}).then((response) => {
      expect(response).to.not.be.empty;
    });
  });
});
