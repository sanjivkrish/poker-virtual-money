//'use strict';
//
//angular.module('pokerVirtualMoneyApp')
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/login', {
//        templateUrl: 'app/login/login.html',
//        controller: 'LoginCtrl'
//      });
//  });

'use strict';

angular.module('pokerVirtualMoneyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      });
  });