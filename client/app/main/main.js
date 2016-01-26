'use strict';

angular.module('pokerVirtualMoneyApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        resolve: {
            mainSession : ['session', '$state', function (session, $state) {
                session.isLoginValid().then(function() {
                    $state.go('login');
                }, function() {
                    return '';
                });
            }]
        }
      });
  });