describe('ISO3166 Service', function() {
  'use strict';

  var ISO3166;

  beforeEach(function (){

    module('ngIsoConstants.services');

    inject(function(_ISO3166_) {
      ISO3166 = _ISO3166_;
    });
  });

  it('should return null for null value', function() {
    expect(ISO3166.getCountryObjFromCountryCode(null)).to.be.null;
    expect(ISO3166.getCountryObjFromNumericString(null)).to.be.null;
    expect(ISO3166.getCountryObjFromAlpha3(null)).to.be.null;
    expect(ISO3166.getCountryObjFromAlpha2(null)).to.be.null;
  });

  it('should return all country objects', function() {
    var result = ISO3166.getAllCountryObjects();
    expect(result).to.have.length(249);
  });

  it('should return US Country obj for number 840', function () {
    var result = ISO3166.getCountryObjFromCountryCode(840);
    expect(result.name).to.equal('United States');
  });

  it('should return Bhutan Country obj for string "064"', function () {
    var result = ISO3166.getCountryObjFromNumericString('064');
    expect(result.name).to.equal('Bhutan');
  });

  it('should return US Country obj for "US"', function () {
    var result = ISO3166.getCountryObjFromAlpha2('US');
    expect(result.name).to.equal('United States');
  });

  it('should return United Kingdom Country obj for "GBR"', function () {
    var result = ISO3166.getCountryObjFromAlpha3('GBR');
    expect(result.name).to.equal('United Kingdom');
  });

  it('should return null object for "PAS"', function () {
    var result = ISO3166.getCountryObjFromAlpha3('PAS');
    should.not.exist(result);
  });

});
