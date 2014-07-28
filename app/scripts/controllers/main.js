"use strict";

/**
 * @ngdoc function
 * @name couchPotatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the couchPotatoApp
 */
angular.module("couchPotatoApp")
	.controller("MainCtrl", ["$scope", "$sce", "$timeout", "LocalTvConfig", "TvConfig", function ($scope, $sce, $timeout, LocalTvConfig, TvConfig) {
		var localTvConfigId = LocalTvConfig.getLocalTvConfigId();
		if(localTvConfigId){
			TvConfig.get({id: localTvConfigId}, function(tvConfig){

                var currentPosition = 0;
                var timerPromise;

                function moveOnAndWait(){
                    if(currentPosition + 1 > tvConfig.urls.length - 1){
                        currentPosition = 0;
                    }
                    else{
                        currentPosition += 1;
                    }
                    $scope.currentUrl = tvConfig.urls[currentPosition].url;
                    timerPromise = $timeout(moveOnAndWait, tvConfig.urls[currentPosition].interval * 1000);
                }

				angular.forEach(tvConfig.urls, function(key){
					key.url = $sce.trustAsResourceUrl(key.url);
				});

				$scope.currentUrl = tvConfig.urls[0].url;
                timerPromise = $timeout(moveOnAndWait, tvConfig.urls[0].interval * 1000)
			});
		}
	}]);
