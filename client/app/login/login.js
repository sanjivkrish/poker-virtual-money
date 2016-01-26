'use strict';

angular.module('pokerVirtualMoneyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        resolve: {
            loginSession : ['session', '$state', function (session, $state) {
                session.isLoginValid().then(function() {
                    return '';
                }, function() {
                    $state.go('main');
                });
            }]
        }
      });
  });