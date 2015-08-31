(function() {
	'use strict';
	angular.module('app').controller('HomeController', HomeController);
	HomeController.$inject = ['HomeFactory'];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.bugs = HomeFactory.bugs;
		vm.deleteBug = HomeFactory.deleteBug;
	}
})();
