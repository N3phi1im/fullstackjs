var App;
(function (App) {
    'use strict';
    angular.module('app', ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/home.html',
            controller: 'HomeController as vm',
        }).when('/Bug/Create', {
            templateUrl: '/templates/CreateBug.html',
            controller: 'CreateBugController as vm'
        }).when('/Bug/Edit/:id', {
            templateUrl: '/templates/EditBug.html',
            controller: 'EditBugController as vm',
        })
            .otherwise('/');
    });
})(App || (App = {}));
