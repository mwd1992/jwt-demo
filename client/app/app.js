'use strict';

angular.module('jwtDemoApp', [
  'jwtDemoApp.auth',
  'jwtDemoApp.admin',
  'jwtDemoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
