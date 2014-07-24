'use strict';

/**
 * @ngdoc service
 * @name couchpotatoApp.LocalTvConfig
 * @description
 * # LocalTvConfig
 * Service in the couchpotatoApp.
 */
angular.module('couchpotatoApp')
	.service('LocalTvConfig', [function LocalTvConfig() {
		const localStorageKey = "tvConfig";

		this.localTvConfig = getLocalTvConfig();

		this.setLocalTvConfig = function(tvConfig){
			window.localStorage.setItem(localStorageKey, JSON.stringify(tvConfig));
			this.localTvConfig = tvConfig;
		};

		function getLocalTvConfig(){
			return window.localStorage.getItem(localStorageKey);
		}
	}]);
