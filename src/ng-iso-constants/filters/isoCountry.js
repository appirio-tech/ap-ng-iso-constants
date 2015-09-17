(function(angular) {
  'use strict';
  angular.module('ngIsoConstants.filters')
  /**
   * @brief converts Alpha2 or NumericCode to Name
   * @details Returns original input if unable to concert
   *
   * @param  input - numeric Country code or alpha2
   * @return Country name
   */
  .filter('isoCountry', ['ISO3166', function(ISO3166) {
    return function(input) {
      var result = null;
      if (isNumeric(input)) {
        result = ISO3166.getCountryObjFromNumericCode(input);

      } else if (typeof(input) === 'string') {
        if (input.length === 2) {
          result = ISO3166.getCountryObjFromAlpha2(input.toUpperCase());

        } else if (input.length === 3) {
          result = ISO3166.getCountryObjFromAlpha3(input.toUpperCase());

        }
      }

      return (result) ? result.name: input;

      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    };
  }]);
})(angular);
