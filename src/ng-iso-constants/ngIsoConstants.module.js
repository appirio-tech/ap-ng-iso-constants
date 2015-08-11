(function(angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('ngIsoConstants.config', [])
    .value('ngIsoConstants.config', {
      debug: true
    });

  // Modules
  angular.module('ngIsoConstants.filters', []);
  angular.module('ngIsoConstants.services', []);
  angular.module('ngIsoConstants', [
    'ngIsoConstants.config',
    'ngIsoConstants.filters',
    'ngIsoConstants.services'
  ]);

})(angular);
