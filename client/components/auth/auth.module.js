'use strict';

angular.module('jwtDemoApp.auth', [
  'jwtDemoApp.constants',
  'jwtDemoApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
