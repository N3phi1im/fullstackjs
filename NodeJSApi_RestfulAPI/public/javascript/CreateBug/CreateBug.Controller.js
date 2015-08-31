(function() {
  'use strict';
  angular.module('app').controller('CreateBugController', CreateBugController);
  CreateBugController.$inject = ['HomeFactory', '$state'];

  function CreateBugController(HomeFactory, $state) {
    var vm = this;
    vm.newBug = {};
    vm.createBug = function() {
      HomeFactory.createBug(vm.newBug).then(function() {
        $state.go('Home');
      })
    }
  }
})();
