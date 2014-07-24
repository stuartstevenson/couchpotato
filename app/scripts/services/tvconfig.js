'use strict';

/**
 * @ngdoc service
 * @name couchpotatoApp.TvConfig
 * @description
 * # TvConfig
 * Service in the couchpotatoApp.
 */
angular.module('couchpotatoApp')
	.service('TvConfig', ["$http", function TvConfig($http) {
		const restEndPoint = "/localhost:8050/tvconfig";

		this.getAllTvConfigPromise = function(){
			return $http.get(restEndPoint);
		};

		this.getTvConfigPromise = function(id){
			return $http.get(restEndPoint + "/" + id);
		};

		this.getAddTvConfigPromise = function(tvConfig){
			return $http.put(restEndPoint, tvConfig);
		};

		this.getUpdateTvConfigPromise = function(tvConfig){
			return $http.post(restEndPoint, tvConfig);
		};

		this.getDeleteTvConfigPromise = function(id){
			return $http.delete(restEndPoint + "/" + id);
		};
	}]);
