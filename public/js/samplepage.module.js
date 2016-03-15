(function() {
  "use strict";

  angular
    .module("samplepage", [])
    .controller("MainController", MainController)

    function MainController($http) {
      var vm = this;

      vm.newUser = {};

      vm.submitUser = submitUser;
      vm.lineOne = 'Choose a Username';
      vm.lineTwo = 'Must be at least 8 characters.';

      function submitUser() {
        console.log('clicked');
        $http
          .post("/users", vm.newUser)
          .then(function (response) {
            if(!response.data.username) {
              vm.lineOne = "Username already taken";
            }
          });
      }
    }

})();
