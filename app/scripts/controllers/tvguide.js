"use strict";

/**
 * @ngdoc function
 * @name couchPotatoApp.controller:TvGuideCtrl
 * @description
 * # TvGuideCtrl
 * Controller of the couchPotatoApp
 */
angular.module("couchPotatoApp")
	.controller("TvGuideCtrl", ["$scope", "TvConfig", "LocalTvConfig", function ($scope, TvConfig, LocalTvConfig) {
		TvConfig.query().$promise.then(function(tvConfigs){
			$scope.tvConfigs = tvConfigs;
		});

		$scope.setLocalTvConfig = function(tvConfig){
			LocalTvConfig.setLocalTvConfig(tvConfig);
		};
	}]);
