describe('ISO3166 filters', function() {
  'use strict';

  var isoCountryFilter;

  beforeEach(function (){

    module('ngIsoConstants.services');
    module('ngIsoConstants.filters');

    inject(function(_isoCountryFilter_) {
      isoCountryFilter = _isoCountryFilter_;
    });
  });

  it('should return "United States" given alpha2', function() {
    expect(isoCountryFilter('US')).to.equal('United States');
  });

  it('should return "United States" string given alpha3', function() {
    expect(isoCountryFilter('USA')).to.equal('United States');
  });

  it('should return the original input if there is no match', function() {
    expect(isoCountryFilter('UAP')).to.equal('UAP');
    expect(isoCountryFilter(null)).to.equal(null);
    expect(isoCountryFilter(undefined)).to.equal(undefined);
  });
});
