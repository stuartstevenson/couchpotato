"use strict";

/**
 * @ngdoc function
 * @name monitorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monitorApp
 */
angular.module("monitorApp")
	.controller("MainCtrl", function ($scope) {
		$scope.awesomeThings = [
			"HTML5 Boilerplate",
			"AngularJS",
			"Karma"
		];
	});
