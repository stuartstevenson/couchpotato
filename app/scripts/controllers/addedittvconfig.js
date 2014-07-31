'use strict';

/**
 * @ngdoc function
 * @name couchPotatoApp.controller:AddEditTvConfigCtrl
 * @description
 * # AddEditTvConfigCtrl
 * Controller of the couchPotatoApp
 */
angular.module('couchPotatoApp')
	.controller('AddEditTvConfigCtrl', ["$scope", "$routeParams", "$location", "TvConfig", function ($scope, $routeParams, $location, TvConfig) {
		if($routeParams.id){
			TvConfig.get({id: $routeParams.id}, function(tvConfig){
				$scope.tvConfig = tvConfig;
			});
		}
		else{
			$scope.tvConfig = new TvConfig({
				id: -1,
				urls: [{
					sequence: 0
				}]
			});
		}

		function recalculateSequence(){
			angular.forEach($scope.tvConfig.urls, function(key, index){
				key.sequence = index;
			});
		}

		$scope.moveUpInSequence = function(index){
			var screen = $scope.tvConfig.urls.splice(index, 1)[0];
			$scope.tvConfig.urls.splice(index - 1, 0, screen);
			recalculateSequence();
		};
		$scope.moveDownInSequence = function(index){
			var screen = $scope.tvConfig.urls.splice(index, 1)[0];
			$scope.tvConfig.urls.splice(index + 1, 0, screen);
			recalculateSequence();
		};
		$scope.addUrl = function(){
			$scope.tvConfig.urls.push({
				sequence: $scope.tvConfig.urls.length
			});
		};
		$scope.removeUrl = function(index){
			$scope.tvConfig.urls.splice(index, 1)
		};
		$scope.save = function(){
			$scope.tvConfig.$save(function(tvConfig){
				$location.path("/tvconfig/" + tvConfig.id);
			});
		}
	}]);
