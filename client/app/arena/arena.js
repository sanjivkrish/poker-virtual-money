'use strict';

angular.module('pokerVirtualMoneyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('arena', {
        url: '/',
        templateUrl: 'app/arena/arena.html',
        controller: 'ArenaCtrl'
      });
  });