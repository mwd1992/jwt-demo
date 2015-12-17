(function(angular, undefined) {
'use strict';

angular.module('jwtDemoApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);