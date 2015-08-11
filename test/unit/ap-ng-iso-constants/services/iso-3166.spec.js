describe('ISO3166 Service', function() {
  'use strict';

  var ISO3166;
  // excuted before each "it" is run.
  beforeEach(function (){

    // load the module.
    module('apNgIsoConstants.services');

    // inject your service for testing.
    // The _underscores_ are a convenience thing
    // so you can have your variable name be the
    // same as your injected service.
    inject(function(_ISO3166_) {
      ISO3166 = _ISO3166_;
    });
  });

  // check to see if it has the expected function
  it('should return all country objects', function() {
    var result = ISO3166.getAllCountryObjects();
    expect(result).to.have.length(249);
  });

  it('should return US Country obj for "840"', function () {
    var result = ISO3166.getCountryObjFromNumericCode(840);
    expect(result.name).to.equal("United States");
  });

  it('should return US Country obj for "US"', function () {
    var result = ISO3166.getCountryObjFromAlpha2("US");
    expect(result.name).to.equal("United States");
  });

  it('should return US Country obj for "GBR"', function () {
    var result = ISO3166.getCountryObjFromAlpha3("GBR");
    expect(result.name).to.equal("United Kingdom");
  });

  it('should return null object for "PAS"', function () {
    var result = ISO3166.getCountryObjFromAlpha3("PAS");
    should.not.exist(result);
  });

});
