(function() {
  'use strict';
  angular.module('app').controller('EditBugController', EditBugController);
  EditBugController.$inject = ['$state', '$stateParams', 'HomeFactory'];

  function EditBugController($state, $stateParams, HomeFactory) {
    var vm = this;
    var getBug = function() {
      HomeFactory.getBug($stateParams.id).then(function(res) {
        vm.bug = res;
        vm.editBug = angular.copy(vm.bug);
      }, function(res) {
        $state.go('Home');
      });
    }
    //if there is no id in the params, go back to the home page
    if (!$stateParams.id) $state.go('Home');
    //check that the arr is filled. If not, query the server for that bug.
    if (HomeFactory.bugs.length > 0) {
      vm.bug = HomeFactory.findBug($stateParams.id);
      if (vm.bug === null) getBug();
      //need to make it so if the bug array exists, it parses the object into an array.
      else vm.editBug = angular.copy(vm.bug);
    } else getBug();

    vm.saveBug = function(next) {
      HomeFactory.editBug(vm.editBug, vm.bug).then(function() {
        $state.go('Home');
      })
    }

    vm.replaceBug = function() {
      HomeFactory.replaceBug(vm.newBug, vm.bug).then(function() {
        $state.go('Home')
      });
    }
  }
})();
