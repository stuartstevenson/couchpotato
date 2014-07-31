"use strict";

/**
 * @ngdoc service
 * @name couchPotatoApp.LocalTvConfig
 * @description
 * # LocalTvConfig
 * Service in the couchPotatoApp.
 */
angular.module("couchPotatoApp")
	.service("LocalTvConfig", ["$sce", function LocalTvConfig($sce) {
		var localStorageKey = "tvConfig";

		this.getLocalTvConfigId = function(){
			return localTvConfigId;
		};

		this.setLocalTvConfigId = function(id){
			window.localStorage.setItem(localStorageKey, id);
			localTvConfigId = id;
		};

		var localTvConfigId = window.localStorage.getItem(localStorageKey);

	}]);
