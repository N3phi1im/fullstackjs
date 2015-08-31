(function() {
  'use strict';
  angular.module('app', ['ui.router']).config(Config);
  Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/javascript/HomePage/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
    }).state('CreateBug', {
			url: '/Bug/Create',
			templateUrl: '/javascript/CreateBug/CreateBug.html',
			controller: 'CreateBugController',
			controllerAs: 'vm'
		}).state('EditBug', {
      url: '/Bug/Edit/:id',
      templateUrl: '/javascript/EditBug/EditBug.html',
      controller: 'EditBugController',
      controllerAs: 'vm'
    });
    $urlRouterProvider.otherwise('/');
  }
})();
