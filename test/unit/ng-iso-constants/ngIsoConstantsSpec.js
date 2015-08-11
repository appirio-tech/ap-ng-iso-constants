'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('ngIsoConstants');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('ngIsoConstants.config')).to.be.ok;
  });


  it('should load filters module', function() {
    expect(hasModule('ngIsoConstants.filters')).to.be.ok;
  });

  it('should load services module', function() {
    expect(hasModule('ngIsoConstants.services')).to.be.ok;
  });


});
