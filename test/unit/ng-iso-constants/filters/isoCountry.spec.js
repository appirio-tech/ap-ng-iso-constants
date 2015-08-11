describe('ISO3166 filters', function() {
  'use strict';

  var isoCountryFilter;
  // var mockISO3166;
  // excuted before each "it" is run.
  beforeEach(function (){

    // load the module.
    module('ngIsoConstants.services');
    module('ngIsoConstants.filters');

    // mockISO3166 = {
    //   getCountryObjFromAlpha2: function(code) {
    //     if (code === 'US')
    //       return {name: "United States", alpha2: "US"}
    //     return null;
    //   },
    //   getCountryObjFromAlpha3: function(code) {
    //     if (code === 'USA')
    //       return {name: "United States", alpha2: "USA"}
    //     return null;
    //   }
    // };
    // module(function ($provide) {
    //   $provide.factory('ISO3166', mockISO3166);
    // });
    // inject your service for testing.
    // The _underscores_ are a convenience thing
    // so you can have your variable name be the
    // same as your injected service.
    inject(function(_isoCountryFilter_) {
      isoCountryFilter = _isoCountryFilter_;
    });
  });

  it("should return 'United States' string", function() {
    expect(isoCountryFilter("USA")).to.equal("United States");
  });

  it("should return same string", function() {
    expect(isoCountryFilter("UAP")).to.equal("UAP");
  });

});
