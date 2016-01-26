'use strict';

angular.module('pokerVirtualMoneyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('arena', {
        url: '/',
        templateUrl: 'app/arena/arena.html',
        controller: 'ArenaCtrl',
        resolve: {
            arenaSession : ['session', '$state', function (session, $state) {
                session.isLoginValid().then(function() {
                    $state.go('login');
                }, function() {
                    return '';
                });
            }]
        }
      });
  });