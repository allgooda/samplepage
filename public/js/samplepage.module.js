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

      vm.linewidthone = '135px';
      vm.linewidthtwo = '190px';

      function checkLengths() {

      if(vm.lineOne.length === 22) {
        vm.linewidthone = '162px';
        vm.linewidthtwo = '145px'
      } else if (vm.lineOne.length === 17) {
        vm.linewidthone = "126px"
        vm.linewidthtwo = "60px"
      }

      }

      function submitUser() {
        console.log('clicked');
        $http
          .post("/users", vm.newUser)
          .then(function (response) {
            if(!response.data.username) {
              vm.lineOne = "Username already taken";
              vm.lineTwo = "Please try another one.";
              checkLengths();
            } else {
              vm.lineOne = "Username created.";
              vm.lineTwo = "Success!"
              checkLengths();
            }
          });
      }
    }

})();
