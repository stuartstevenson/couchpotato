"use strict";

/**
 * @ngdoc function
 * @name couchPotatoApp.controller:TvGuideCtrl
 * @description
 * # TvGuideCtrl
 * Controller of the couchPotatoApp
 */
angular.module("couchPotatoApp")
	.controller("TvGuideCtrl", ["$scope", "$location", "TvConfig", "LocalTvConfig", function ($scope, $location, TvConfig, LocalTvConfig) {
		TvConfig.query().$promise.then(function(tvConfigs){
			$scope.tvConfigs = tvConfigs;
		});

		$scope.setLocalTvConfig = function(tvConfig){
			LocalTvConfig.setLocalTvConfigId(tvConfig.id);
		};

		$scope.removeLocalTvConfig = function(){
			LocalTvConfig.setLocalTvConfigId(null);
		};

		$scope.edit = function(tvConfig){
			$location.path("/tvconfig/" + tvConfig.id);
		};

		$scope.isCurrentlyWatching = function(tvConfig){
			return tvConfig.id === Number(LocalTvConfig.getLocalTvConfigId());
		};
	}]);
