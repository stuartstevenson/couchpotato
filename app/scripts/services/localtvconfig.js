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

		function getLocalTvConfig(){
			var tvConfig = JSON.parse(window.localStorage.getItem(localStorageKey));
			for(var url in tvConfig.urls){
				tvConfig.urls[url].url = $sce.trustAsResourceUrl(tvConfig.urls[url].url);
			}
			return tvConfig;
		}

		this.localTvConfig = getLocalTvConfig();

		this.setLocalTvConfig = function(tvConfig){
			window.localStorage.setItem(localStorageKey, JSON.stringify(tvConfig));
			this.localTvConfig = tvConfig;
		};

	}]);
