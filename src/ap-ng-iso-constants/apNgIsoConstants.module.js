(function(angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('apNgIsoConstants.config', [])
    .value('apNgIsoConstants.config', {
      debug: true
    });

  // Modules
  angular.module('apNgIsoConstants.filters', []);
  angular.module('apNgIsoConstants.services', []);
  angular.module('apNgIsoConstants', [
    'apNgIsoConstants.config',
    'apNgIsoConstants.filters',
    'apNgIsoConstants.services'
  ]);

})(angular);
