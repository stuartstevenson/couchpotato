"use strict";

/**
 * @ngdoc function
 * @name couchPotatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the couchPotatoApp
 */
angular.module("couchPotatoApp")
	.controller("MainCtrl", ["$scope", "$sce", "$timeout", "poller", "LocalTvConfig", "TvConfig", function ($scope, $sce, $timeout, poller, LocalTvConfig, TvConfig) {
		var localTvConfigId = LocalTvConfig.getLocalTvConfigId();
		var currentPosition = 0;
		var timerPromise;
		var tvConfig;

		function moveOnAndWait() {
			if (currentPosition + 1 > tvConfig.urls.length - 1) {
				currentPosition = 0;
			}
			else {
				currentPosition += 1;
			}
			$scope.currentScreen = tvConfig.urls[currentPosition];
			$scope.currentScreen.url = $sce.trustAsResourceUrl($scope.currentScreen.url);
			timerPromise = $timeout(moveOnAndWait, tvConfig.urls[currentPosition].interval * 1000);
		}

		if (localTvConfigId) {
			var tvConfigPoller = poller.get(TvConfig, {
				action: "get",
				params: {
					id: localTvConfigId
				}
			});

			tvConfigPoller.promise.then(
				null,
				null,
				function (data) {
					tvConfig = data;
					if(!timerPromise) {
						tvConfig.urls[0].url = $sce.trustAsResourceUrl(tvConfig.urls[0].url);
						$scope.currentScreen = tvConfig.urls[0];
						timerPromise = $timeout(moveOnAndWait, tvConfig.urls[currentPosition].interval * 1000);
					}
				}
			);

			$scope.$on('$destroy', function destroy() {
				$timeout.cancel(timerPromise);
				tvConfigPoller.stop();
			})
		}
	}]);
