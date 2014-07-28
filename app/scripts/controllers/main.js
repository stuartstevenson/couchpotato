"use strict";

/**
 * @ngdoc function
 * @name couchPotatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the couchPotatoApp
 */
angular.module("couchPotatoApp")
	.controller("MainCtrl", ["$scope", "$sce", "LocalTvConfig", "TvConfig", function ($scope, $sce, LocalTvConfig, TvConfig) {
		var localTvConfigId = LocalTvConfig.getLocalTvConfigId();
		if(localTvConfigId){
			TvConfig.get({id: localTvConfigId}, function(tvConfig){
				angular.forEach(tvConfig.urls, function(key){
					key.url = $sce.trustAsResourceUrl(key.url);
				});
				$scope.tvConfig = tvConfig;
			});
		}
	}]);
