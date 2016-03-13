(function() {
  "use strict";

  angular
    .module("samplepage", ['ui.router'])
    .config(router);

  function router($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main.html',

      })

  }
})();
