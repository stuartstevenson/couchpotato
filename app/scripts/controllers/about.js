'use strict';

/**
 * @ngdoc function
 * @name monitorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the monitorApp
 */
angular.module('monitorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
