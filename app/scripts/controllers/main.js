"use strict";

/**
 * @ngdoc function
 * @name couchPotatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the couchPotatoApp
 */
angular.module("couchPotatoApp")
	.controller("MainCtrl", ["$scope", "LocalTvConfig", function ($scope, LocalTvConfig) {
		$scope.localTvConfig = LocalTvConfig.localTvConfig;
	}]);
