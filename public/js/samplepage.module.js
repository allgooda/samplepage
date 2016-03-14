(function() {
  "use strict";

  angular
    .module("samplepage", [])
    .controller("MainController", MainController)

    function MainController($http) {
      var vm = this;

      vm.newUser = {};

      vm.submitUser = submitUser;

      function submitUser() {
        console.log('clicked');
        $http
          .post("/users", vm.newUser);
      }
    }

})();
