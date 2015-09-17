(function(angular) {
  angular.module('ngIsoConstants.config', [])
    .value('ngIsoConstants.config', {
      debug: true
    });

  angular.module('ngIsoConstants.filters', []);
  angular.module('ngIsoConstants.services', []);
  angular.module('ngIsoConstants', [
    'ngIsoConstants.config',
    'ngIsoConstants.filters',
    'ngIsoConstants.services'
  ]);

})(angular);
