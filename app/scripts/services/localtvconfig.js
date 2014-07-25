"use strict";

/**
 * @ngdoc service
 * @name couchPotatoApp.LocalTvConfig
 * @description
 * # LocalTvConfig
 * Service in the couchPotatoApp.
 */
angular.module("couchPotatoApp")
	.service("LocalTvConfig", [function LocalTvConfig() {
		var localStorageKey = "tvConfig";

		function getLocalTvConfig(){
			return window.localStorage.getItem(localStorageKey);
		}

		this.localTvConfig = getLocalTvConfig();

		this.setLocalTvConfig = function(tvConfig){
			window.localStorage.setItem(localStorageKey, JSON.stringify(tvConfig));
			this.localTvConfig = tvConfig;
		};

	}]);
