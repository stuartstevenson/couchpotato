"use strict";

/**
 * @ngdoc function
 * @name couchPotatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the couchPotatoApp
 */
angular.module("couchPotatoApp")
	.controller("MainCtrl", function ($scope) {
		$scope.awesomeThings = [
			"HTML5 Boilerplate",
			"AngularJS",
			"Karma"
		];
	});
