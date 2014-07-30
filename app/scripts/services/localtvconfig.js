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
		var localTvConfigId;
		this.getLocalTvConfigId = function(){
			if(!localTvConfigId){
				this.setLocalTvConfigId(window.localStorage.getItem(localStorageKey));
			}
			return localTvConfigId;
		};

		this.setLocalTvConfigId = function(id){
			window.localStorage.setItem(localStorageKey, id);
			localTvConfigId = id;
		};

	}]);
