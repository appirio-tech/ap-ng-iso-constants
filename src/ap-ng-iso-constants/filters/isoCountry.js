(function(angular) {
  'use strict';
  angular.module('apNgIsoConstants.filters')
  /**
   * @brief converts Alpha2 or NumericCode to Name
   * @details Returns original input if unable to concevt
   *
   * @param  input - numeric Country code or alpha2
   * @return Country name
   */
  .filter('isoCountry', ['ISO3166', function(ISO3166) {
    return function(input) {
      // check if input is code or alpha2
      var result = null;
      if (isNaN(input)) {
        var re = /\d{2}/;
        if (re.test(input)) {
          result = ISO3166.getCountryObjFromAlpha2(input.toUpperCase());
        } else {
          result = ISO3166.getCountryObjFromAlpha3(input.toUpperCase());
        }
      } else {
        result = ISO3166.getCountryObjFromNumericCode(input);
      }
      console.log('result: ', result);
      return (result) ? result.name: input;
    };
  }]);
})(angular);
